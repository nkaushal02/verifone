import { Module } from '@nestjs/common';
import { CommandModule } from 'nestjs-command';

import { UserSeed } from './user.seed';
import { ProductsSeed } from './products.seed';
import { UserModule } from '../../user/user.module';
import { ProductsModule } from '../../products/products.module';

@Module({
    imports: [CommandModule, UserModule, ProductsModule],
    providers: [UserSeed, ProductsSeed],
    exports: [UserSeed, ProductsSeed],
})
export class SeedsModule {}