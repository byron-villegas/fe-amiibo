import { mount } from '@vue/test-utils'
import AmiiboList from '../AmiiboList.vue'
import type { Amiibo } from '@/types/amiibo'
import { describe, expect, it } from 'vitest'

const mockAmiibos: Amiibo[] = [
  {
    amiiboSeries: 'Animal Crossing',
    character: 'Sandy',
    gameSeries: 'Animal Crossing',
    head: '04380001',
    image: 'https://raw.githubusercontent.com/N3evin/AmiiboAPI/master/images/icon_04380001-03000502.png',
    name: 'Sandy',
    release: {
      au: '2016-11-10',
      eu: '2016-11-11',
      jp: '2016-11-03',
      na: '2016-12-02'
    },
    tail: '03000502',
    type: 'Card'
  },
  {
    amiiboSeries: 'Super Mario',
    character: 'Mario',
    gameSeries: 'Super Mario',
    head: '00000000',
    image: 'https://raw.githubusercontent.com/N3evin/AmiiboAPI/master/images/icon_00000000-00000002.png',
    name: 'Mario',
    release: {
      au: '2014-11-29',
      eu: '2014-11-28',
      jp: '2014-12-06',
      na: '2014-11-21'
    },
    tail: '00000002',
    type: 'Figure'
  }
]

describe('AmiiboList.vue', () => {
  it('renderiza la cantidad correcta de tarjetas', () => {
    const wrapper = mount(AmiiboList, {
      props: { amiibos: mockAmiibos }
    })
    expect(wrapper.findAll('.card-amiibo').length).toBe(2)
  })

  it('muestra el nombre y la fecha de lanzamiento EU de cada amiibo', () => {
    const wrapper = mount(AmiiboList, {
      props: { amiibos: mockAmiibos }
    })
    expect(wrapper.text()).toContain('Sandy')
    expect(wrapper.text()).toContain('2016-11-11')
    expect(wrapper.text()).toContain('Mario')
    expect(wrapper.text()).toContain('2014-11-28')
  })

  it('renderiza correctamente la imagen de cada amiibo', () => {
    const wrapper = mount(AmiiboList, {
      props: { amiibos: mockAmiibos }
    })
    const imgs = wrapper.findAll('img')
    expect(imgs[0].attributes('src')).toBe(mockAmiibos[0].image)
    expect(imgs[1].attributes('src')).toBe(mockAmiibos[1].image)
  })

  it('aplica las clases de estilo correctamente', () => {
    const wrapper = mount(AmiiboList, {
      props: { amiibos: mockAmiibos }
    })
    expect(wrapper.find('.container-amiibo').exists()).toBe(true)
    expect(wrapper.find('.card-amiibo').exists()).toBe(true)
    expect(wrapper.find('.card-img-amiibo').exists()).toBe(true)
    expect(wrapper.find('.amiibo').exists()).toBe(true)
  })
})