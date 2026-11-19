import { asset } from '../lib/assets'
import type { ProjectGalleryItem, ProjectSector } from '../types'

/**
 * Source: "Company Profile PT. Saekapraya Adhitama Engineering.pdf".
 * Project names, customers, users, locations and years below are transcribed
 * from the published PDF tables. No project has been invented or embellished.
 */
export const projectSectors: ProjectSector[] = [
  {
    id: 'food-beverage',
    name: 'Food & Beverage',
    description: 'Proyek instrumentasi, kontrol, dan dukungan teknis untuk industri makanan dan minuman.',
    image: asset('/images/projects/calibration-installation.jpg'),
    items: [
      {
        name: 'Maintenance contract for Instrument and Control System',
        customer: 'PT Multi Bintang Indonesia',
        user: 'PT Multi Bintang Indonesia, Mojokerto East Java',
        year: '2008',
      },
      {
        name: 'Steam Nozzle Control System',
        customer: 'CV Panjialam Gemilang',
        user: 'PT Kievit Indonesia Salatiga',
        year: '2010',
      },
      { name: 'Support Technician', customer: 'PT Rockwell Automation', user: 'PT Unilever', year: '2022' },
      {
        name: 'Builder Panel Pepsico',
        customer: 'PT Rockwell Automation',
        user: 'PT Pepsico Indonesia Foods and Beverages',
        year: '2024',
      },
    ],
  },
  {
    id: 'oil-gas',
    name: 'Oil & Gas',
    description: 'Panel kontrol, shutdown system, TAS, dan dukungan material untuk sektor minyak dan gas.',
    image: asset('/images/projects/control-system-scada.jpg'),
    items: [
      { name: 'Compressor Feed Gas Panel', customer: 'PT Alfa Nabila Teknik', user: 'PT Pertamina EP', year: '2017' },
      { name: 'Retrofit Shutdown System NFG Mundu', customer: 'PT Wiradijaya', user: 'PT Pertamina EP', year: '2017' },
      {
        name: 'Function Test Control System and Instrumental Tugu Barat Field Gas',
        customer: 'PT Indie Global',
        user: 'PT Pertamina EP',
        year: '2019',
      },
      { name: 'Retrofit Shutdown System CCR NFG KHT', customer: 'PT Wiradijaya', user: 'PT Pertamina EP', year: '2019' },
      { name: 'TAS Belawan Project', customer: 'PT Rockwell Automation', user: 'PT Pertamina EP', year: '2019' },
      { name: 'TAS Belawan Project', customer: 'PT Rockwell Automation', user: 'PT Pertamina EP', year: '2020' },
      { name: 'Low Computer, Bristol Control Wave Micro', customer: 'PT Marajasa', user: 'Perta Arun Gas', year: '2021' },
      { name: 'Material & Service Integrated Compressor Tanjung', customer: 'PT Menara Mas', user: 'PT Pertamina', year: '2021' },
      { name: 'Material & Service TAS BIMA Project', customer: 'PT Rockwell Automation', user: 'PT Pertamina', year: '2021' },
      {
        name: 'Control Panel & Instrument Indirect Heater',
        customer: 'PT Nuansa Indah Mane',
        user: 'PT Pertamina EP Asset 3 Field',
        year: '2022',
      },
      { name: 'Upgrade Panel WTP Tanjung', customer: 'PT Elco Prima Sejahtera', user: 'PT Pertamina EP', year: '2022' },
      {
        name: 'Pengadaan Material Upgrading System Monitoring Control Engine Compressor Berbasis PLC',
        customer: 'PT Pertamina EP',
        user: 'PT Pertamina EP',
        year: '2022',
      },
      {
        name: 'Upgrade MPP Control Panel System Area Cluster F',
        customer: 'PT Triacha Jaya',
        user: 'PT Pertamina EP Zona 7 Tambun Field',
        year: '2023',
      },
    ],
  },
  {
    id: 'petrochemical',
    name: 'Petrochemical',
    description: 'Migration system, metering, logging data, dan pengadaan panel untuk industri petrokimia.',
    image: asset('/images/projects/panel-work.jpg'),
    items: [
      { name: 'NSD Migration Project', customer: 'PT Rockwell Automation Indonesia', user: 'PT Unilever Cikarang', year: '2010' },
      { name: 'HCP Migration Project', customer: 'PT Rockwell Automation Indonesia', user: 'PT Unilever Cikarang', year: '2011' },
      { name: 'Logging Data System', customer: 'PT Kalbe Farma', user: 'PT Kalbe Farma', year: '2013' },
      {
        name: 'Perbaikan Pabrik Nitrogen N2 Plan',
        customer: 'PT Kaltim Daya Mandiri',
        user: 'PT Kaltim Daya Mandiri',
        year: '2020',
      },
      { name: 'Upgrade Panel RAPP Riau', customer: 'PT RAPP', user: 'PT RAPP', year: '2021' },
      {
        name: 'Custody Flow Meter TIE in KDM to KNI',
        customer: 'PT Kaltim Nitrate Indonesia',
        user: 'PT Kaltim Nitrate Indonesia',
        year: '2021',
      },
      {
        name: 'Insulation Skid & Pig Launcher and Receiver Package',
        customer: 'PT Petrotekno',
        user: 'PT Petrotekno',
        year: '2022',
      },
      { name: 'Pengadaan Barang Demin & Metering Control Panel', customer: 'PT Wijaya Karya', user: 'PT Wijaya Karya', year: '2023' },
      {
        name: 'Maintenance Simulation Skid Training Center Factory',
        customer: 'PT Petrotekno',
        user: 'PT Petrotekno',
        year: '2023',
      },
      {
        name: 'Custody Flow Meter TIE in KDM to KNI',
        customer: 'PT Kaltim Nitrate Indonesia',
        user: 'PT Kaltim Nitrate Indonesia',
        year: '2023',
      },
    ],
  },
  {
    id: 'power-plant',
    name: 'Power Plant',
    description: 'Sistem kontrol air intake, SCADA, GCP, panel PLTS, dan kalibrasi flow meter pembangkit.',
    image: asset('/images/projects/sat-test.jpg'),
    items: [
      { name: 'Retrofit Water Intake Control System', customer: 'PT Dwi Mutiara Sejahtera', user: 'PT Indonesia Power, Tanjung Priok', year: '2007' },
      { name: 'SCADA Feed Gas Compressor PJB Muara Tawar', customer: 'PT MKS', user: 'PT MKS', year: '2011' },
      { name: 'SCADA Feed Gas Compressor PJB Muara Karang', customer: 'PT MKS', user: 'PT MKS', year: '2011' },
      {
        name: 'Flow Computer fuel gas turbine unit IV (PLN Kramasan)',
        customer: 'PT Cogindo Daya Bersama',
        user: 'PT Cogindo Daya Bersama',
        year: '2013',
      },
      { name: 'Fly ash system', customer: 'PT Wiradijaya / PT PJB Indramayu', user: 'PT PLN (Persero)', year: '2014' },
      { name: 'Geothermal Rantau Dadap', customer: 'PT Arbas Mitra Energi', year: '2019' },
      { name: 'GCP (Generator Control Panel) PLN Lombok', customer: 'PT Arbas Mitra Energi', year: '2019' },
      { name: 'Panel Control PLTS Raijua (NTT)', customer: 'PT Gridtech Indonesia', year: '2021' },
      { name: 'Panel Control PLTS Pura (NTT)', customer: 'PT Gridtech Indonesia', year: '2021' },
      { name: 'Panel Control PLTS Nule (NTT)', customer: 'PT Gridtech Indonesia', user: 'PT PLN (Persero)', year: '2021' },
      {
        name: 'Jasa Kalibrasi Alat Ukur (Flow Meter) Bahan Bakar Tahap 2 PLTD Tenau',
        customer: 'PT Cogindo Daya Bersama',
        user: 'PT Cogindo Daya Bersama',
        year: '2023',
      },
      {
        name: 'Pengadaan Jasa Repair Flow Meter PLTD Tenau',
        customer: 'PT Cogindo Daya Bersama',
        user: 'PT Cogindo Daya Bersama',
        year: '2023',
      },
    ],
  },
  {
    id: 'control-scada',
    name: 'Control System & SCADA',
    description: 'Pemantauan instrumentasi, gun monitoring, metering, dan sistem SCADA pada fasilitas operasi.',
    image: asset('/images/projects/gun-monitoring-unit.jpg'),
    items: [
      { name: 'Gun Monitoring Unit 1 Panel', location: 'Pertamina RU IV Cilacap' },
      {
        name: 'Monitoring Instrumentasi Panel Gas Compressor Ajax',
        location: 'Pertamina EP Asset 5 Field Bunyu Kaltara',
      },
      { name: 'Monitoring Gas Metering Storage Loading LNG Ship Cooling Down System', location: 'Perta Arun Gas Aceh' },
      {
        name: 'Monitoring Instrumentasi Panel Control Pompa Injeksi',
        location: 'Pertamina EP Regional 3 Zona 9 Kalsel',
      },
      { name: 'Gun Monitoring Unit 2', location: 'Pertamina RU IV Cilacap CIB 1 & 2' },
      { name: 'SCADA Booster Compressor', location: 'PJB Muara Tawar' },
    ],
  },
  {
    id: 'electrical',
    name: 'Electrical',
    description: 'Wiring junction box, sensor, panel surya, hazardous panel, dan instalasi ground rod.',
    image: asset('/images/projects/wiring-junction-box.jpg'),
    items: [
      { name: 'Wiring Junction Box LCS', location: 'PGN Saka Energi' },
      { name: 'Wiring Sensor Temperatur and Sensor Pressure', location: 'EDGE 2 Data Center' },
      { name: 'Installation Panel Cell Surya (PLTS)', location: 'Dirjen Migas – Sulawesi Tengah' },
      { name: 'Electrical (Hazardous Panel Gas Compressor Ajax)' },
      { name: 'Installation Ground Rod', location: 'PT Pertamina Gas Mundu' },
      { name: 'Ground Rod Tester (PLTS)', location: 'Dirjen Migas – Sulawesi Tengah' },
    ],
  },
  {
    id: 'instrumentation',
    name: 'Calibration & Installation',
    description: 'Kalibrasi pressure, transmitter, flowmeter, serta instalasi tubing dan gas detector.',
    image: asset('/images/projects/calibration-pressure-test.jpg'),
    items: [
      { name: 'Calibration Pressure Test', location: 'Pertamina EP – Bunyu' },
      { name: 'Calibration Pressure Transmitter', location: 'Pertamina EP – Subang' },
      { name: 'Instrumentasi (Install Tubing)', location: 'Dirjen Migas – Sulawesi Tengah' },
      { name: 'Installasi Metering' },
      { name: 'Kalibrasi Flowmeter Feeder PLTD Batakan', user: 'PT Cogindo Daya Bersama' },
      { name: 'Installasi Gas Detector', location: 'Dirjen Migas – Sulawesi Tengah' },
    ],
  },
  {
    id: 'panel-work',
    name: 'Panel Work',
    description: 'Wiring panel kontrol, pengecekan daya, dan engineering program remote panel.',
    image: asset('/images/projects/wiring-control-panel.jpg'),
    items: [
      { name: 'Wiring Control Panel Gas Compressor' },
      { name: 'Cek Power – Multiphase Pump F-01' },
      { name: 'Engineering Program Remote Panel' },
      { name: 'Wiring Control Panel Pompa Injection' },
    ],
  },
  {
    id: 'fat-sat',
    name: 'FAT & SAT',
    description: 'Factory Acceptance Test dan Site Acceptance Test untuk panel dan sistem kontrol.',
    image: asset('/images/projects/fat-test.jpg'),
    items: [
      { name: 'FAT Project WTP Tanjung' },
      { name: 'SAT Power Plant: Comp Tanjung 2022/2023' },
      { name: 'SAT Power Plant: WIP Tanjung' },
      { name: 'SAT Upgrading Panel Comp SKG Nibung 2021/2022' },
      { name: 'SAT Project WTP Tanjung' },
      { name: 'FAT Panel Gas Comp. Ariel Field Tanjung' },
      { name: 'FAT Panel Comp. SKG Nibung Bunyu' },
    ],
  },
  {
    id: 'hse',
    name: 'Health, Safety & Environment',
    description: 'Dokumentasi keselamatan kerja, safety induction, toolbox meeting, dan gas test area.',
    image: asset('/images/projects/safety-induction.jpg'),
    items: [
      { name: 'Gas Test Area' },
      { name: 'Safety Meeting' },
      { name: 'Safety Patrol' },
      { name: 'Safety Sign' },
      { name: 'Safety Induction' },
      { name: 'Toolbox Meeting' },
    ],
  },
]

/** Authentic photographs from the PDF, paired only with their published captions. */
export const projectGallery: ProjectGalleryItem[] = [
  {
    title: 'Control System & SCADA',
    detail: 'Gambar proyek dari Company Profile PT SAE',
    image: asset('/images/projects/control-system-scada.jpg'),
  },
  {
    title: 'Gun Monitoring Unit',
    detail: 'Panel, Pertamina RU IV Cilacap',
    image: asset('/images/projects/gun-monitoring-unit.jpg'),
  },
  {
    title: 'Panel Gas Compressor',
    detail: 'Pertamina EP Asset 5 Field Bunyu Kaltara',
    image: asset('/images/projects/panel-gas-compressor.jpg'),
  },
  {
    title: 'Metering Storage Loading LNG Ship',
    detail: 'Perta Arun Gas Aceh',
    image: asset('/images/projects/metering-storage.jpg'),
  },
  {
    title: 'Calibration Pressure Test',
    detail: 'Pertamina EP – Bunyu',
    image: asset('/images/projects/calibration-pressure-test.jpg'),
  },
  {
    title: 'Installasi Metering',
    detail: 'Dokumentasi proyek instrumentasi',
    image: asset('/images/projects/install-metering.jpg'),
  },
  {
    title: 'Wiring Control Panel',
    detail: 'Dokumentasi panel work',
    image: asset('/images/projects/wiring-control-panel.jpg'),
  },
  {
    title: 'Engineering Program Remote Panel',
    detail: 'Dokumentasi panel work',
    image: asset('/images/projects/remote-panel.jpg'),
  },
  {
    title: 'FAT Project WTP Tanjung',
    detail: 'Factory Acceptance Test',
    image: asset('/images/projects/fat-test.jpg'),
  },
  {
    title: 'SAT Power Plant',
    detail: 'Site Acceptance Test',
    image: asset('/images/projects/sat-test.jpg'),
  },
  {
    title: 'Safety Induction',
    detail: 'Dokumentasi HSE',
    image: asset('/images/projects/safety-induction.jpg'),
  },
  {
    title: 'Toolbox Meeting',
    detail: 'Dokumentasi HSE',
    image: asset('/images/projects/toolbox-meeting.jpg'),
  },
]

export const totalProjects = projectSectors.reduce((sum, sector) => sum + sector.items.length, 0)
