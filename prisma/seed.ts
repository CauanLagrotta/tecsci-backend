import { prisma } from "../src/lib/prisma";
import fs from "fs";
import path from "path";
import { metricaSchema } from "../src/schemas/metricas/metrica-seed.schema";

async function main() {
  await prisma.usina.createMany({
    data: [{ nome: "Usina 1" }, { nome: "Usina 2" }],
    skipDuplicates: true,
  });

  const inversores = [
  { nome: "Inversor 1", usinaId: 1 },
  { nome: "Inversor 2", usinaId: 1 },
  { nome: "Inversor 3", usinaId: 1 },
  { nome: "Inversor 4", usinaId: 1 },
  { nome: "Inversor 5", usinaId: 2 },
  { nome: "Inversor 6", usinaId: 2 },
  { nome: "Inversor 7", usinaId: 2 },
  { nome: "Inversor 8", usinaId: 2 },
];

  // Criar inversores ou atualizar se existir
  for (const inv of inversores) {
  await prisma.inversor.upsert({
    where: { nome: inv.nome },
    update: {},
    create: {
      nome: inv.nome,
      usinaId: inv.usinaId,
    },
  });
}

  // Ler metricas e processar
  const filePath = path.join(__dirname, "../sample/metrics.json");
  const fileContent = fs.readFileSync(filePath, "utf-8");
  const metrics = JSON.parse(fileContent);

  for (const rawMetric of metrics) {
    const result = metricaSchema.safeParse(rawMetric);
    if (!result.success) {
      console.error("Erro de validação: ", result.error.format());
      continue;
    }

    const metric = result.data;

    await prisma.metrica.create({
      data: {
        inversorId: metric.inversor_id,
        potenciaAtivaWatt: metric.potencia_ativa_watt ?? 0,
        temperaturaCelsius: metric.temperatura_celsius ?? 0,
        datetime: new Date(metric.datetime.$date),
      },
    });
  }
}

main()
  .catch((error) => {
    console.error("Erro ao executar seed: ", error);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
