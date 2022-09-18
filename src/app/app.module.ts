import PrismaModule from 'src/libs/prisma/prisma.module';
import Components from 'src/components';
import { Module } from '@nestjs/common';

@Module({
  imports: [PrismaModule, ...Components],
})
export default class AppModule {}
