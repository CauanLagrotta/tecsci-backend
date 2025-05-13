-- DropForeignKey
ALTER TABLE "metrica" DROP CONSTRAINT "metrica_inversorId_fkey";

-- AlterTable
ALTER TABLE "metrica" ALTER COLUMN "inversorId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "metrica" ADD CONSTRAINT "metrica_inversorId_fkey" FOREIGN KEY ("inversorId") REFERENCES "inversor"("id") ON DELETE SET NULL ON UPDATE CASCADE;
