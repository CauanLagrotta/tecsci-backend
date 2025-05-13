/*
  Warnings:

  - A unique constraint covering the columns `[nome]` on the table `inversor` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "inversor" ADD COLUMN     "nome" TEXT;

-- CreateIndex
CREATE UNIQUE INDEX "inversor_nome_key" ON "inversor"("nome");
