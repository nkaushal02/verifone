import { Module } from '@nestjs/common';
import { CommandModule } from 'nestjs-command';

import { UserSeed } from './user.seed';
import { UserModule } from '../../user/user.module';

@Module({
    imports: [CommandModule, UserModule],
    providers: [UserSeed],
    exports: [UserSeed],
})
export class SeedsModule {}