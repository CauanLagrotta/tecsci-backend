import { prisma } from "../../lib/prisma";
import { UpdateUsinaDTO } from "../../schemas/usinas/update-usinas.schemas";

export const updateUsinaService = async (id: number, data: UpdateUsinaDTO) => {
  const existingUsina = await prisma.usina.findFirst({
    where: { id },
  });

  if (!existingUsina) {
    throw new Error("Usina nao encontrada");
  }

  const updatedUsina = await prisma.usina.update({
    where: { id },
    data: {
      nome: data.nome,
    },
  });

  return updatedUsina;
};
