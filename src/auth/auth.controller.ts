import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport/dist/auth.guard';
import { UserService } from 'src/user/user.service';
import { AuthService } from './auth.service';
import { LoginDTO } from './login.dto';

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

    
    @Post('login')
    async login(@Body() loginDTO: LoginDTO) {
        
        const user = await this.userService.findByLogin(loginDTO);
        
        // Create security token 
        const payload = { email: user.email };
        const token = await this.authService.signPayload(payload);
        return { user, token};
    }
}