import { getNeode } from '@db/neo4j'

const neode = getNeode()

export const categories = async () => {
  return [
    await neode.create('Category', {
      id: 'corona',
      slug: 'corona',
      name: 'corona',
      icon: '/img/categories/corona.svg',
    }),
    await neode.create('Category', {
      id: 'digital_euro',
      slug: 'digital_euro',
      name: 'digital_euro',
      icon: '/img/categories/digital_euro.svg',
    }),
    await neode.create('Category', {
      id: 'who',
      slug: 'who',
      name: 'who',
      icon: '/img/categories/who.svg',
    }),
    await neode.create('Category', {
      id: 'monetary_system',
      slug: 'monetary_system',
      name: 'monetary_system',
      icon: '/img/categories/monetary_system.svg',
    }),
    await neode.create('Category', {
      id: 'basic_rights',
      slug: 'basic_rights',
      name: 'basic_rights',
      icon: '/img/categories/basic_rights.svg',
    }),
    await neode.create('Category', {
      id: 'justice',
      slug: 'justice',
      name: 'justice',
      icon: '/img/categories/justice.svg',
    }),
    await neode.create('Category', {
      id: 'demonstrations',
      slug: 'demonstrations',
      name: 'demonstrations',
      icon: '/img/categories/demonstrations.svg',
    }),
    await neode.create('Category', {
      id: 'child_protection',
      slug: 'child_protection',
      name: 'child_protection',
      icon: '/img/categories/child_protection.svg',
    }),
    await neode.create('Category', {
      id: 'transhumanism',
      slug: 'transhumanism',
      name: 'transhumanism',
      icon: '/img/categories/transhumanism.svg',
    }),
    await neode.create('Category', {
      id: 'surveillance',
      slug: 'surveillance',
      name: 'surveillance',
      icon: '/img/categories/surveillance.svg',
    }),
    await neode.create('Category', {
      id: 'education',
      slug: 'education',
      name: 'education',
      icon: '/img/categories/education.svg',
    }),
    await neode.create('Category', {
      id: 'media',
      slug: 'media',
      name: 'media',
      icon: '/img/categories/media.svg',
    }),
    await neode.create('Category', {
      id: 'ngos',
      slug: 'ngos',
      name: 'ngos',
      icon: '/img/categories/ngos.svg',
    }),
  ]
}
