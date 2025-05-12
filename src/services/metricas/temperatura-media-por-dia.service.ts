import { prisma } from "../../lib/prisma";
import { temperaturaMediaPorDiaQuery } from "../../schemas/metricas/temperatura-media-por-dia.schema";

export const temperaturaMediaPorDiaService = async (
  params: temperaturaMediaPorDiaQuery
) => {
  const { inversor_id, data_inicio, data_fim } = params;

  const result = await prisma.$queryRaw`
    SELECT 
      DATE(datetime) AS data,
      AVG("temperaturaCelsius") AS temperatura_media
    FROM metrica
    WHERE "inversorId" = ${inversor_id}
      AND datetime BETWEEN ${new Date(data_inicio)} AND ${new Date(data_fim)}
    GROUP BY data
    ORDER BY data ASC
  `;

  return result;
};
