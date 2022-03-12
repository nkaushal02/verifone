import { IsEmail, IsNotEmpty } from 'class-validator';

export class RegisterDTO {
  
  @IsNotEmpty()
  name: string;

  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsNotEmpty()
  password: string;
}