// acesso ao request no express
import {Request, Response} from 'express';
import { ListCategoryService } from '../../services/category/ListCategoryService';

// criar classe e metodo handle para receber req e res. Chamar o servico e mostrar as categorias do banco. Esperar o servico e chamar o metodo para chamar o execute e pegar as categorias.
class ListCategoryController{
  async handle(req: Request, res: Response){
    const listCategoryService = new ListCategoryService();

    const category = await listCategoryService.execute();
    
    return res.json(category);
  }
}


export { ListCategoryController }
