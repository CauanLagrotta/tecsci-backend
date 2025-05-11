import { prisma } from "../../lib/prisma";

export const deleteInversoresService = async (id: number) => {
  const existingInversor = await prisma.inversor.findFirst({
    where: { id },
  });

  if (!existingInversor) {
    throw new Error("Inversor nao encontrado");
  }

  const deletedInversor = await prisma.inversor.delete({
    where: { id },
  });

  return deletedInversor;
};
