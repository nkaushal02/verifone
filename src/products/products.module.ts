import { Module } from '@nestjs/common';
import { ProductsService } from './products.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ProductsSchema } from '../models/products.schema';
import { ProductsController } from './products.controller';

@Module({
    imports: [
      MongooseModule.forFeature([{ name: 'Products', schema: ProductsSchema }]),
    ],
    providers: [ProductsService],
    controllers: [ProductsController],
    exports: [ProductsService],
})
export class ProductsModule {
    
}
