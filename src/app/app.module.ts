import PrismaModule from '@/libs/prisma/prisma.module';
import Components from '@/components';
import { Module } from '@nestjs/common';

@Module({
  imports: [PrismaModule, ...Components],
})
export default class AppModule {}
