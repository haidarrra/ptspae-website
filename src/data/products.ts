import type { Product, ProductCategory } from '../types'
import { asset } from '../lib/assets'

/**
 * Product names, categories, images and source URLs are taken from the live
 * ptspae.com product catalogue. Summaries are intentionally descriptive only —
 * no specifications, prices, stock or MOQ are invented.
 */
export const products: Product[] = [
  {
    slug: 'plc-allen-bradley-controllogix-1756',
    name: 'PLC Allen Bradley ControlLogix 1756 Series',
    category: 'PLC',
    image: asset('/images/products/controllogix-1756.jpg'),
    summary:
      'Programmable Logic Controller Allen Bradley seri ControlLogix 1756 untuk sistem kontrol industri.',
    sourceUrl:
      'https://ptspae.com/product/plc-programmable-logic-controller-allen-bradley-controllogix-1756-series-p1435071.aspx',
  },
  {
    slug: 'plc-allen-bradley-compactlogix',
    name: 'PLC Allen Bradley CompactLogix',
    category: 'PLC',
    image: asset('/images/products/compactlogix.jpg'),
    summary:
      'Programmable Logic Controller Allen Bradley CompactLogix untuk kebutuhan otomasi industri.',
    sourceUrl:
      'https://ptspae.com/product/plc-programmable-logic-controller-allen-bradley-compactlogix-p1435029.aspx',
  },
  {
    slug: 'level-sensor-guide-radar-abb',
    name: 'Level Sensor Guide Radar ABB',
    category: 'Transmitters Gauge',
    image: asset('/images/products/abb-level-radar.jpg'),
    summary:
      'Level sensor guide radar dari ABB untuk pengukuran level pada aplikasi instrumental industri.',
    sourceUrl: 'https://ptspae.com/product/level-sensor-guide-radar-abb-p1189548.aspx',
  },
  {
    slug: 'level-gauge-transmitter-magnetic-abb',
    name: 'Level Gauge and Transmitter Magnetic ABB',
    category: 'Transmitters Gauge',
    image: asset('/images/products/abb-level-magnetic.jpg'),
    summary:
      'Level gauge dan transmitter magnetic ABB untuk indikasi dan pemantauan level proses industri.',
    sourceUrl:
      'https://ptspae.com/product/level-gauge-and-transmitter-magnetic-abb-p1189551.aspx',
  },
  {
    slug: 'pressure-transmitter-abb',
    name: 'Pressure Transmitter ABB',
    category: 'Transmitters Gauge',
    image: asset('/images/products/abb-pressure.jpg'),
    summary:
      'Pressure transmitter ABB sebagai perangkat instrumentasi dan kontrol untuk pengukuran tekanan.',
    sourceUrl:
      'https://ptspae.com/product/peralatan-instrumentasi-dan-kontrol-pressure-transmitter-abb-p1189518.aspx',
  },
  {
    slug: 'differential-pressure-abb',
    name: 'Differential Pressure ABB',
    category: 'Transmitters Gauge',
    image: asset('/images/products/abb-differential-pressure.jpg'),
    summary:
      'Transmitter differential pressure ABB untuk pengukuran selisih tekanan dalam sistem proses.',
    sourceUrl:
      'https://ptspae.com/product/peralatan-instrumentasi-dan-kontrol-differential-pressure-abb-p1189530.aspx',
  },
  {
    slug: 'temperature-transmitter-abb',
    name: 'Temperature Transmitter ABB',
    category: 'Transmitters Gauge',
    image: asset('/images/products/abb-temperature.jpg'),
    summary:
      'Temperature transmitter ABB untuk pengukuran dan transmisi sinyal suhu pada aplikasi industri.',
    sourceUrl:
      'https://ptspae.com/product/peralatan-instrumentasi-dan-kontrol-temperature-transmitter-abb-p1189535.aspx',
  },
  {
    slug: 'flow-computer-abb',
    name: 'Flow Computer ABB',
    category: 'Transmitters Gauge',
    image: asset('/images/products/abb-flow-computer.jpg'),
    summary:
      'Flow computer ABB untuk pengolahan data aliran pada sistem instrumentasi dan kontrol proses.',
    sourceUrl:
      'https://ptspae.com/product/peralatan-instrumentasi-dan-kontrol-flow-computer-abb-p1189539.aspx',
  },
  {
    slug: 'coriolis-flowmeter-abb',
    name: 'Coriolis Flowmeter ABB',
    category: 'Transmitters Gauge',
    image: asset('/images/products/abb-coriolis-flowmeter.jpg'),
    summary:
      'Coriolis flowmeter ABB untuk pengukuran laju alir dan massa fluida dalam proses industri.',
    sourceUrl:
      'https://ptspae.com/product/peralatan-instrumentasi-dan-kontrol-coriolis-flowmeter-abb-p1189542.aspx',
  },
  {
    slug: 'plc-allen-bradley-micrologix',
    name: 'PLC Allen Bradley MicroLogix',
    category: 'PLC Allen Bradley',
    image: asset('/images/products/micrologix.jpg'),
    summary:
      'Programmable Logic Controller Allen Bradley seri MicroLogix untuk sistem kontrol mesin.',
    sourceUrl: 'https://ptspae.com/product/plc-allen-bradley-micrologix-p636098.aspx',
  },
  {
    slug: 'plc-allen-bradley-slc-500',
    name: 'PLC Allen Bradley SLC 500 Series',
    category: 'PLC Allen Bradley',
    image: asset('/images/products/slc-500.jpg'),
    summary:
      'Programmable Logic Controller Allen Bradley seri SLC 500 untuk aplikasi otomasi industri.',
    sourceUrl: 'https://ptspae.com/product/plc-allen-bradley-slc-p636104.aspx',
  },
  {
    slug: 'plc-allen-bradley-panelview',
    name: 'PLC Allen Bradley PanelView',
    category: 'PLC Allen Bradley',
    image: asset('/images/products/panelview.jpg'),
    summary:
      'PanelView dari Allen Bradley sebagai antarmuka operator pada sistem kontrol industri.',
    sourceUrl: 'https://ptspae.com/product/alen-bradley-panelview-p636943.aspx',
  },
]

export const productCategories: Array<'Semua' | ProductCategory> = [
  'Semua',
  'PLC',
  'PLC Allen Bradley',
  'Transmitters Gauge',
]

export function getProductBySlug(slug: string | undefined): Product | undefined {
  return products.find((product) => product.slug === slug)
}
