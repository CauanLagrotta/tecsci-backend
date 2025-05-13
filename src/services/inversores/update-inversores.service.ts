import { prisma } from "../../lib/prisma";
import { UpdateInversorDTO } from "../../schemas/inversores/update-inversores.schema";

export const updateInversorService = async (
  id: number,
  data: UpdateInversorDTO
) => {
  const existingInversor = await prisma.inversor.findUnique({
    where: { id },
  });

  if (!existingInversor) {
    throw new Error("Inversor nao encontrado");
  }

  const updatedInversor = await prisma.inversor.update({
    where: { id },
    data: {
      usinaId: data.usinaId,
      nome: data.nome,
    },
  });

  return updatedInversor;
};
