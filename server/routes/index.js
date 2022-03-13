const router = require('express').Router();
const { nanoid } = require('nanoid');
const fs = require('fs');
const db = './db/data.json';
const dayjs = require('dayjs');
const rateLimit = require('express-rate-limit');
const apiLimiter = rateLimit({
    windowMs: 30 * 1000,
    max: 2,
    standardHeaders: true,
    legacyHeaders: false
});

(function dbcheck() {
    if (fs.existsSync(db)) return;
    if (!fs.existsSync('./db')) fs.mkdirSync('./db');
    fs.writeFileSync(db, JSON.stringify({ uuids: [] }));
})();

const readData = () => JSON.parse(fs.readFileSync(db, 'utf8'));
const writeData = (value) => fs.writeFileSync(db, JSON.stringify({ uuids: [...JSON.parse(fs.readFileSync(db, 'utf8')).uuids, value] }, null, 2));

const generateUniqueId = () => {
    const id = nanoid(14);
    const { uuids } = readData();
    if (uuids.map(x => x.id).includes(id)) {
        return generateUniqueId();
    } else {
        writeData({ id: id, eat: dayjs().add(30, 's').unix() });
        return id;
    }
};

router.use('/qr', apiLimiter);
router.get('/qr', (req, res) => {
    res.json({ id: generateUniqueId() });
});

module.exports = router;