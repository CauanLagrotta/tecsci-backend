import { prisma } from "../../lib/prisma";
import { PotenciaMaxPorDiaQuery } from "../../schemas/metricas/potencia-max-por-dia.schema";

export const potenciaMaxPorDiaService = async (params: PotenciaMaxPorDiaQuery) => {
  const { inversor_id, data_inicio, data_fim } = params;

  const result = await prisma.metrica.groupBy({
    by: ["datetime"],
    where: {
      inversorId: inversor_id,
      datetime: {
        gte: new Date(data_inicio),
        lte: new Date(data_fim),
      },
    },
    _max: {
      potenciaAtivaWatt: true,
    },
  });

  return result.map((entry) => ({
    data: entry.datetime,
    potencia_maxima_watt: entry._max.potenciaAtivaWatt,
  }));
};
