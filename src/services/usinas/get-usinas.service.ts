import { prisma } from "../../lib/prisma";

export const getUsinasService = async (page: number = 1, limit: number = 5) => {
  try {
    const skip = (page - 1) * limit;

    const usinas = await prisma.usina.findMany({
      skip: skip,
      take: limit,
      orderBy: {
        createdAt: "asc", // Ordenando por data de criação em ordem crescente
      },
    });

    const totalUsinas = await prisma.usina.count();
    const totalPages = Math.ceil(totalUsinas / limit);

    if (page < 1 || page > totalPages) {
      throw new Error("Página inválida");
    }

    return {
      usinas,
      totalUsinas,
      totalPages,
      currentPage: page,
    };
  } catch (error) {
    throw new Error("Nenhuma usina cadastrada");
  }
};

export const getUsinasServiceSearch = async (nome: string) => {
  try {
    const usinas = await prisma.usina.findMany({
      where: nome
        ? { nome: { contains: nome.toLowerCase(), mode: "insensitive" } }
        : undefined,

      orderBy: {
        nome: "asc",
      },
    });
    return usinas.length ? usinas : null;
  } catch (error) {
    throw new Error("Nenhuma usina cadastrada");
  }
};
