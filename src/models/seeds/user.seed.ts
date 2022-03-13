import { Command } from 'nestjs-command';
import { Injectable } from '@nestjs/common';

import { UserService } from 'src/user/user.service';

@Injectable()
export class UserSeed {
    constructor(
        private readonly userService: UserService,
    ) { }

    @Command({ command: 'create:user', describe: 'create a user' })
    async create() {
        const user = await this.userService.create({
            name: 'Administrator',
            email: 'admin@test.com',
            password: 'password'
        });
        console.log("Administrator User added: EmailAddress -  admin@test.com, Password - password");
    }
}