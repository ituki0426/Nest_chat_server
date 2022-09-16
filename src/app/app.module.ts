import PrismaService from 'src/libs/prisma/prisma.service';
import { Module } from '@nestjs/common';

@Module({
  imports: [PrismaService],
})
export default class AppModule {}
