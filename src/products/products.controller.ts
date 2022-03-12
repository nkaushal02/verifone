import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport/dist/auth.guard';
import { ProductsService } from './products.service';
import { Products } from '../models/products.schema';

import {ApiCreatedResponse, ApiOperation, ApiResponse, ApiTags} from "@nestjs/swagger";
import { CustomResponse } from "../libraries/custom-response.class";
import { productsListTags } from "../docs/constants";

@ApiTags(...productsListTags)
@Controller('products')
export class ProductsController {
    constructor(
        private ProductsService: ProductsService,
    ) {}
    
    @Get('/')
    @ApiOperation({
        operationId: "Product Listing API",
        description: "Fetch products listing from the database"
    })
    @ApiResponse({ status: 200, description: 'The products listing has been successfully created.',type: CustomResponse})
    @ApiResponse({ status: 400, description: 'Products not found.',type: CustomResponse})
    @ApiResponse({ status: 403, description: 'Forbidden.'})
    @UseGuards(AuthGuard("jwt"))
    async getUsers(): Promise<CustomResponse> {
        try {
            const result = await this.ProductsService.getProducts({});
            if (result && result.length > 0) {
                return CustomResponse.serialize(200, "SUCCESS", result);
            } else{
                return CustomResponse.serialize(400,'NOT FOUND',[]);
            }
        } catch (e) {
            return CustomResponse.serialize(401,'FAILED',[]);
        }
    }
}