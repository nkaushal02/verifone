import { Command } from 'nestjs-command';
import { Injectable } from '@nestjs/common';

import { ProductsService } from 'src/products/products.service';

@Injectable()
export class ProductsSeed {
    constructor(
        private readonly productsService: ProductsService,
    ) { }

    @Command({ command: 'create:products', describe: 'create a some products listing' })
    async create() {
        const products = await this.productsService.createMany([
            {
                sku: 'SUK1',
                title: 'Product1',
                shortDescription: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
                description: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here, content here, making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for lorem ipsum will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose.',
                price: 100,
                stock: 5
            }, {
                sku: 'SUK2',
                title: 'Product2',
                shortDescription: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
                description: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here, content here, making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for lorem ipsum will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose.',
                price: 200,
                stock: 10
            }, {
                sku: 'SUK3',
                title: 'Product3',
                shortDescription: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
                description: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here, content here, making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for lorem ipsum will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose.',
                price: 10,
                stock: 50
            }, {
                sku: 'SUK4',
                title: 'Product4',
                shortDescription: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
                description: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here, content here, making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for lorem ipsum will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose.',
                price: 450,
                stock: 15
            }, {
                sku: 'SUK5',
                title: 'Product5',
                shortDescription: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
                description: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here, content here, making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for lorem ipsum will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose.',
                price: 100,
                stock: 5
            }, {
                sku: 'SUK6',
                title: 'Product6',
                shortDescription: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
                description: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here, content here, making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for lorem ipsum will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose.',
                price: 10,
                stock: 500
            }
        ]);
        //console.log(products);
        console.log("6 dummy products added on the databse.");
    }
}