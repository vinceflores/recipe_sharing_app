import { Module } from '@nestjs/common';
import { ClerkService } from './clerk.service';
import { ClerkController } from './clerk.controller';
import { PrismaModule } from '../prisma/prisma.module';
import { PrismaService } from '../prisma/prisma.service';

@Module({
  imports: [PrismaModule],
  providers: [PrismaService, ClerkService],
  controllers: [ClerkController],
  exports: [ClerkService],
})
export class ClerkModule {}
