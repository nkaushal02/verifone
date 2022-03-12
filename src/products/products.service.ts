import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import {FilterQuery, Model } from "mongoose";
import { Products } from '../types/Products';
import { ProductsDTO } from './products.dto';

@Injectable()
export class ProductsService {

    constructor(@InjectModel('Products') private productsModel: Model<Products>) {}
    
    async findOne(productFilterQuery: FilterQuery<Products>): Promise<Products> {
        return this.productsModel.findOne(productFilterQuery);
    }

    async createMany(products: any) {
        const createdProduct = this.productsModel.insertMany(products);
        return createdProduct;
    }

    async getProducts(usersFilterQuery: FilterQuery<Products>): Promise<Products[]> {
        return this.productsModel.find(usersFilterQuery)
    }

    sanitizeProduct(product: Products) {
        const sanitized = product.toObject();
        return sanitized;
    }

    async create(ProductsDTO: ProductsDTO) {
        const { sku } = ProductsDTO;
        const product = await this.findOne({ sku });
        if (product) {
            throw new HttpException('Product already exists', HttpStatus.BAD_REQUEST);
        }
       
        const createdProduct = new this.productsModel(ProductsDTO);
        await createdProduct.save();
        return this.sanitizeProduct(createdProduct);
    }
}