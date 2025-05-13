import { prisma } from "../../lib/prisma";

export const getInversoresService = async (
  page: number = 1,
  limit: number = 5
) => {
  try {
    const inversores = await prisma.inversor.findMany({
      skip: (page - 1) * limit,
      take: limit,
      orderBy: [{ createdAt: "asc" }, { id: "asc" }],
    });

    const totalInversores = await prisma.inversor.count();
    const totalPages = Math.ceil(totalInversores / limit);

    if (page < 1 || page > totalPages) {
      throw new Error("Página inválida");
    }

    return {
      inversores,
      totalInversores,
      totalPages,
      currentPage: page,
    };
  } catch (error) {
    throw new Error("Nenhum inversor cadastrado");
  }
};
