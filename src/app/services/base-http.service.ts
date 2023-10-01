import axios from 'axios';
import { Category } from '../models/category.model'
import { Product } from '../models/product.model'

export class BaseHttpService<TypeClass>{
  //data: TypeClass[] = [];

  constructor(
    private url: string
  ) { }

  async getAll() {
    const { data } = await axios.get<TypeClass[]>(this.url);
    return data;
  }
}

// const service = new BaseHttpService<string>();
// service.data;

// const service1 = new BaseHttpService<string>();
// service1.data;

(async () => {
  const url1 = 'https://api.escuelajs.co/api/v1/products';
  const productsService = new BaseHttpService<Product>(url1);

  const rta = await productsService.getAll();
  console.log('products', rta.length);

  const url2 = 'https://api.escuelajs.co/api/v1/categories';
  const categoryService = new BaseHttpService<Category>(url2);

  const rta2 = await categoryService.getAll();
  console.log('category', rta2.length);
})();


