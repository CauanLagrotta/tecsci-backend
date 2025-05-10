-- CreateTable
CREATE TABLE "usina" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "usina_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "inversor" (
    "id" SERIAL NOT NULL,
    "usinaId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "inversor_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "metrica" (
    "id" SERIAL NOT NULL,
    "inversorId" INTEGER NOT NULL,
    "potenciaAtivaWatt" DOUBLE PRECISION NOT NULL,
    "temperaturaCelsius" DOUBLE PRECISION NOT NULL,
    "datetime" TIMESTAMP(3) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "metrica_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "usina_nome_key" ON "usina"("nome");

-- CreateIndex
CREATE INDEX "metrica_inversorId_datetime_idx" ON "metrica"("inversorId", "datetime");

-- AddForeignKey
ALTER TABLE "inversor" ADD CONSTRAINT "inversor_usinaId_fkey" FOREIGN KEY ("usinaId") REFERENCES "usina"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "metrica" ADD CONSTRAINT "metrica_inversorId_fkey" FOREIGN KEY ("inversorId") REFERENCES "inversor"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
