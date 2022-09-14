import prismaClient from "../../prisma"

class ListCategoryService {
  async execute() { //executar o servico

    //pegar TODAS categorias e devolver para o usuario. Devolver apenas o ID e o Name
    const category = await prismaClient.category.findMany({
      select: {
        id: true,
        name: true,
      }

    })
    return category;
  }
}

export { ListCategoryService }