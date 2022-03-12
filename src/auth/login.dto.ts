'use strict';
import {IsNotEmpty, IsEmail, MinLength} from "class-validator";
import { ApiProperty } from '@nestjs/swagger';

export class LoginDTO{
	
	@ApiProperty({
		type: String,
        description: "It should be email address"
	})
	@IsNotEmpty() 
	@IsEmail()
	email: string;

	@ApiProperty({
		type: String,
        description: "It should be not empty and The min length of password should be minimum 8 charachter"
	})
	@IsNotEmpty()
    @MinLength(8, { message: " The min length of password is 8 " })
    password: string;
}
