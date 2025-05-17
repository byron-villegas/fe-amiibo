import { mount } from '@vue/test-utils'
import Footer from '../Footer.vue'
import { describe, it, expect, vi } from 'vitest'

// Mock de vue-router
vi.mock('vue-router', () => ({
    useRoute: () => ({
        path: '/'
    }),
    RouterLink: {}
}))

const routerLinkStub = {
    name: 'RouterLink',
    props: ['to', 'class'],
    template: '<a :href="to" :class="class"><slot /></a>'
}

describe('Footer.vue', () => {
    it('renderiza el año actual y el siguiente', () => {
        const wrapper = mount(Footer, {
            global: {
                stubs: {
                    RouterLink: routerLinkStub
                }
            }
        })
        const year = new Date().getFullYear()
        expect(wrapper.html()).toContain(`© 2025 – ${year + 1}`)
    })

    it('renderiza el logo y el texto de derechos', () => {
        const wrapper = mount(Footer, {
            global: {
                stubs: {
                    RouterLink: routerLinkStub
                }
            }
        })
        expect(wrapper.find('img[alt="Footer Logo"]').exists()).toBe(true)
        expect(wrapper.text()).toContain('Todos los derechos reservados')
        expect(wrapper.text()).toContain('Byron Villegas Moya')
    })
})