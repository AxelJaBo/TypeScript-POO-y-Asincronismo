import { CreateProductDto, UpdateProductDto } from "../dtos/product.dto";
import { Product } from "./product.model";

export interface ProductService {
  create(dto: CreateProductDto): Product | Promise<Product[]>;
  getAll(): Product[] | Promise<Product[]>;
  findOne(id: Product['id']): Product | undefined | Promise<Product | undefined>;
  update(id: Product['id'], changes: UpdateProductDto): Product | Promise<Product>;
}
