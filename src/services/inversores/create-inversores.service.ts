import { prisma } from "../../lib/prisma";
import { CreateInversorDTO } from "../../schemas/inversores/create-inversores.schema";

export const createInversorService = async (data: CreateInversorDTO) => {
  const usinaExists = await prisma.usina.findUnique({
    where: {
      id: data.usinaId,
    },
  });

  if (!usinaExists) {
    throw new Error("Usina nao encontrada");
  }

  const newInversor = await prisma.inversor.create({
    data: {
      usinaId: data.usinaId,
    },
  })

  return newInversor
 }
