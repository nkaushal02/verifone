'use strict';
import {IsNotEmpty, IsEmail, MinLength} from "class-validator";

export class LoginDTO{
	@IsNotEmpty() 
	@IsEmail()
	email: string;
	
	@IsNotEmpty()
    @MinLength(8, { message: " The min length of password is 8 " })
    password: string;
}
