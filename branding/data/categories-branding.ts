// Reformer.network's own category set — DB seed data, NOT part of brand.config.ts (the branding
// schema deliberately carries only category.min/max; the list itself is per-brand data). Loaded by the
// backend's brand-data hook: `yarn db:data:branding` scans src/db/data for `*-branding.*` and calls
// the default export. The Dockerfile copies branding/data/ there at image build (ONBUILD COPY).
//
// The ids are the network's topics — nothing like the framework's generic cat0…catN list, and posts
// hang on them, so they must not be renamed.
//
// ⚠️ DO NOT run `yarn db:data:categories` against this instance. That seeds the FRAMEWORK list and
// deletes every category not in it (`WHERE NOT category.id IN $categoryIds DETACH DELETE`), which
// would wipe all of the categories below. This file is the authoritative seed for Reformer.network;
// it syncs in the same spirit (upsert + prune) but against THIS list.
//
// The `icon` values are the brand's own SVGs from assets/_new/icons/svgs/.
import { getNeode } from '@db/neo4j'

const neode = getNeode()

const categories = [
  { id: 'corona', slug: 'corona', name: 'corona', icon: 'reformer-corona' },
  { id: 'digital-euro', slug: 'digital-euro', name: 'digital-euro', icon: 'reformer-digital-euro' },
  { id: 'who', slug: 'who', name: 'who', icon: 'reformer-who' },
  { id: 'monetary-system', slug: 'monetary-system', name: 'monetary-system', icon: 'reformer-monetary-system' },
  { id: 'basic-rights', slug: 'basic-rights', name: 'basic-rights', icon: 'reformer-basic-rights' },
  { id: 'justice', slug: 'justice', name: 'justice', icon: 'reformer-justice' },
  { id: 'demonstrations', slug: 'demonstrations', name: 'demonstrations', icon: 'reformer-demonstrations' },
  { id: 'child-protection', slug: 'child-protection', name: 'child-protection', icon: 'reformer-child-protection' },
  { id: 'transhumanism', slug: 'transhumanism', name: 'transhumanism', icon: 'reformer-transhumanism' },
  { id: 'surveillance', slug: 'surveillance', name: 'surveillance', icon: 'reformer-surveillance' },
  { id: 'education', slug: 'education', name: 'education', icon: 'reformer-education' },
  { id: 'media', slug: 'media', name: 'media', icon: 'reformer-media' },
  { id: 'ngos', slug: 'ngos', name: 'ngos', icon: 'reformer-ngos' },
  { id: 'miscellaneous', slug: 'miscellaneous', name: 'miscellaneous', icon: 'reformer-miscellaneous' }
]

export default async () => {
  let dbCategories = (await neode.all('Category', {})).map((node) => node)
  for await (const category of categories) {
    const inDB = dbCategories.find((dbItem) => dbItem.properties().id === category.id)
    if (inDB) {
      // eslint-disable-next-line no-console
      console.log('update', category.id)
      await inDB.update(category)
      dbCategories = dbCategories.filter((dbItem) => dbItem !== inDB)
    } else {
      // eslint-disable-next-line no-console
      console.log('insert', category.id)
      await neode.create('Category', category)
    }
  }
  // Anything left is not part of this brand's set — e.g. a leftover from the framework seed. Deleting
  // it also drops its CATEGORIZED edges, so posts under a stale category lose that assignment; that is
  // the same trade-off the framework seed makes, and the reason for the warning above.
  for await (const stale of dbCategories) {
    // eslint-disable-next-line no-console
    console.log('delete', stale.properties().id)
    await stale.delete()
  }
}
