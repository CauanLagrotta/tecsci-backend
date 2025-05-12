import { prisma } from "../../lib/prisma";
import { calcInversoresGeracao } from "../../utils/calcInvesoresGeracao";
import { GeracaoUsinaQuery } from "../../schemas/metricas/geracao-usina.schema";

export const geracaoUsinaService = async (params: GeracaoUsinaQuery) => {
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


  const generation = calcInversoresGeracao(
    inversores.map((inv) => ({
      power: inv.metricas.map((m) => ({
        value: m.potenciaAtivaWatt ?? 0,
        date: m.datetime,
      })),
    }))
  );

  return { usina_id, generation };
};
