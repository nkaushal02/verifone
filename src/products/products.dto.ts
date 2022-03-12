import { IsEmail, IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class ProductsDTO {

    @ApiProperty()
    @IsNotEmpty()
    sku: string;
    
    @ApiProperty()
    @IsNotEmpty()
    title: string;

    @ApiProperty()
    @IsNotEmpty()
    price: string;

    @ApiProperty()
    @IsNotEmpty()
    stock: string;
}