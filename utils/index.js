const cron = require("node-cron");
const dayjs = require('dayjs');
const fs = require('fs');
const db = './db/data.json';

const cleanup = () => {
    console.log('⛔ cleanup');
    const time = dayjs().unix();
    const data = JSON.parse(fs.readFileSync(db, 'utf8'));
    const uuids = data.uuids.filter(x => time - x.eat < 30);
    fs.writeFileSync(db, JSON.stringify({ uuids: uuids }, null, 2));
};

function exec() {
    cron.schedule("* * * * *",() => cleanup());
}

module.exports = {
    exec
};