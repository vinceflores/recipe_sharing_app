import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import * as dotenv from 'dotenv';
import { ConfigModule } from '@nestjs/config';
import { ClerkModule } from './clerk/clerk.module';
import { RecipeModule } from './recipe/recipe.module';
import { UserModule } from './user/user.module';

dotenv.config({ path: process.cwd() });
@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true, // so that other modules are not required to import ConfigModule
    }),
    PrismaModule,
    ClerkModule,
    RecipeModule,
    UserModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
