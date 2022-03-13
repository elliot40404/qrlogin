import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import Login from '../Login.vue'

describe('Login', () => {
  it('renders properly', () => {
    // const wrapper = mount(HelloWorld, { props: { msg: 'Hello Vitest' } })
    const wrapper = mount(Login)
    expect(wrapper.text()).toContain('Username')
    expect(wrapper.text()).toContain('Password')
  })
})
