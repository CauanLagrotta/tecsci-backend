import { prisma } from "../../lib/prisma";
import { CreateUsinaDTO } from "../../schemas/usinas/create-usinas.schema";

export const createUsinaService = async (data: CreateUsinaDTO) => {
  const existingUsina = await prisma.usina.findFirst({
    where: {
      nome: data.nome,
    },
  });

  if(existingUsina){
    throw new Error("Usina ja cadastrada");
  }

  if (!existingUsina) {
    const novaUsina = await prisma.usina.create({
      data: {
        nome: data.nome,
      },
    });

    return novaUsina;
  }
};
