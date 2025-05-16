// prisma/seed.ts

import { Prisma, PrismaClient } from '@/generated/prisma'
import dictionaryData from '@/data/dictionary.json';

const prisma = new PrismaClient()

const userData: Prisma.DictionaryCreateInput[] = dictionaryData.map(
  ({ id, ...rest }) => rest
)
async function main() {
  for (const data of userData) {
    await prisma.dictionary.create({ data })
  }
}

main()
  .then(() => {
    console.log("Seeding complete.")
    return prisma.$disconnect()
  })
  .catch((e) => {
    console.error("Seeding error:", e)
    return prisma.$disconnect().finally(() => process.exit(1))
  })
