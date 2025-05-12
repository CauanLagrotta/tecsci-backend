import { prisma } from "../../lib/prisma";
import { geracaoInversoresDTO } from "../../schemas/metricas/geracao-inversores.schema";
import { calcInvertersGeneration } from "../../utils/calcInvesoresGeracao";

export const geracaoInversoresService = async (
  params: geracaoInversoresDTO
) => {
  const { inversor_id, data_inicio, data_fim } = params;

  const metricas = await prisma.metrica.findMany({
    where: {
      inversorId: inversor_id,
      datetime: {
        gte: new Date(data_inicio),
        lte: new Date(data_fim),
      },
    },
    include: {
      inversor: true,
    },
    orderBy: { datetime: "asc" },
  });

  const generation = calcInvertersGeneration([
    {
      power: metricas.map((m) => ({
        value: m.potenciaAtivaWatt ?? 0,
        date: m.datetime,
      })),
    },
  ]);

  return { inversor_id, generation };
};
