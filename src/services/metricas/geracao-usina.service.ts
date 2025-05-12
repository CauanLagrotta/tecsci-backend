import { prisma } from "../../lib/prisma";
import { calcInvertersGeneration } from "../../utils/calcInvesoresGeracao";
import { GeracaoUsinaDTO } from "../../schemas/metricas/geracao-usina.schema";

export const geracaoUsinaService = async (params: GeracaoUsinaDTO) => {
  const { usina_id, data_inicio, data_fim } = params;

  const inversores = await prisma.inversor.findMany({
  where: { usinaId: usina_id },
  include: {
    metricas: {
      where: {
        datetime: {
          gte: new Date(data_inicio),
          lte: new Date(data_fim),
        },
      },
      orderBy: { datetime: "asc" },
    },
  },
});


  const generation = calcInvertersGeneration(
    inversores.map((inv) => ({
      power: inv.metricas.map((m) => ({
        value: m.potenciaAtivaWatt ?? 0,
        date: m.datetime,
      })),
    }))
  );

  return { usina_id, generation };
};
