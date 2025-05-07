import { getDriver, getNeode } from '@db/neo4j'
import { mutate, query } from '@context/database'

const neode = getNeode()
const driver = getDriver()

const categories = [
  {
    id: 'corona',
    slug: 'corona',
    name: 'corona',
    icon: '/img/categories/corona.svg',
  },
  {
    id: 'digital_euro',
    slug: 'digital_euro',
    name: 'digital_euro',
    icon: '/img/categories/digital_euro.svg',
  },
  {
    id: 'who',
    slug: 'who',
    name: 'who',
    icon: '/img/categories/who.svg',
  },
  {
    id: 'monetary_system',
    slug: 'monetary_system',
    name: 'monetary_system',
    icon: '/img/categories/monetary_system.svg',
  },
  {
    id: 'basic_rights',
    slug: 'basic_rights',
    name: 'basic_rights',
    icon: '/img/categories/basic_rights.svg',
  },
  {
    id: 'justice',
    slug: 'justice',
    name: 'justice',
    icon: '/img/categories/justice.svg',
  },
  {
    id: 'demonstrations',
    slug: 'demonstrations',
    name: 'demonstrations',
    icon: '/img/categories/demonstrations.svg',
  },
  {
    id: 'child_protection',
    slug: 'child_protection',
    name: 'child_protection',
    icon: '/img/categories/child_protection.svg',
  },
  {
    id: 'transhumanism',
    slug: 'transhumanism',
    name: 'transhumanism',
    icon: '/img/categories/transhumanism.svg',
  },
  {
    id: 'surveillance',
    slug: 'surveillance',
    name: 'surveillance',
    icon: '/img/categories/surveillance.svg',
  },
  {
    id: 'education',
    slug: 'education',
    name: 'education',
    icon: '/img/categories/education.svg',
  },
  {
    id: 'media',
    slug: 'media',
    name: 'media',
    icon: '/img/categories/media.svg',
  },
  {
    id: 'ngos',
    slug: 'ngos',
    name: 'ngos',
    icon: '/img/categories/ngos.svg',
  },
]

const removeUndefinedCategories = async () => {
  const categoryIds = categories.map((c) => c.id)
  const idPromise = await mutate(driver)({
    query: `
      MATCH (category:Category)
      DETACH DELETE
        WHERE NOT category.id IN $categoryIds
      WITH category
      RETURN category.id AS id
    `,
    variables: {
      categoryIds,
    },
  })
  const ids = idPromise.records.map((r) => r.get('id'))
  console.log(ids)
  return
}

export default async () => {
  await removeUndefinedCategories()
}

/*
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
*/
