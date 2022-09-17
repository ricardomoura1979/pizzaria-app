import { Request, Response } from 'express'

import { CreateProductService } from '../../services/product/CreateProductService'



//receber da requisicao os bodies
class CreateProductController {

  async handle(req: Request, res: Response) {
    //requisicao do body
    const { name, price, description, category_id } = req.body;


    //criar uma nova instancia
    const createProductService = new CreateProductService();
    if (!req.file) {
      throw new Error("error upload file")
    } else {
      const { originalname, filename: banner } = req.file;
      
      // repassar para o servico
      // await --> para esperar a resposta do servico pra retornar ao usuario
      const product = await createProductService.execute({
        name,
        price,
        description,
        banner,
        category_id
      });
      return res.json(product)

    }
  }
}

export { CreateProductController }