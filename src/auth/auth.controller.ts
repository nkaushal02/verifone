import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport/dist/auth.guard';
import { UserService } from 'src/user/user.service';
import { AuthService } from './auth.service';
import { LoginDTO } from './login.dto';

import {ApiCreatedResponse, ApiOperation,ApiResponse, ApiTags} from "@nestjs/swagger";
import { CustomResponse } from "../libraries/custom-response.class";
import { authTags } from "../docs/constants";


@Controller('auth')
export class AuthController {
    constructor(
        private userService: UserService,
        private authService: AuthService,
        
    ) {}
    
    @Get("/onlyauth")
    @UseGuards(AuthGuard("jwt"))
    @Get("/anyone")
    async publicInformation(){
        return  "this can be seen by anyone";
    }

    @ApiTags(...authTags)
    @Post('login')
    @ApiOperation({
        operationId: "Login API",
        description: "Verify user by email address and password"
    })
    @ApiResponse({ status: 200, description: 'Login Access with Authentication Token.',type: CustomResponse})
    @ApiResponse({ status: 400, description: 'Bad Request like password miss match, email address not correct...'})
    async login(@Body() loginDTO: LoginDTO): Promise<CustomResponse> {
        try {
            const user = await this.userService.findByLogin(loginDTO);
            
            // Create security token 
            const payload = { email: user.email };
            const token = await this.authService.signPayload(payload);
            return CustomResponse.serialize(200, 'SUCCESS', { user, token});
        } catch (e) {
            return CustomResponse.serialize(401,'FAILED',[]);
        }
    }
}