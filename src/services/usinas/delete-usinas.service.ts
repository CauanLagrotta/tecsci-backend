import { prisma } from "../../lib/prisma";

export const deleteUsinasService = async (id: number) => {
  const existingUsina = await prisma.usina.findFirst({
    where: { id },
  });

  if (!existingUsina) {
    throw new Error("Usina nao encontrada");
  }

  const deletedUsina = await prisma.usina.delete({
    where: { id },
  });

  return deletedUsina;
};
