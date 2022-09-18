import { Injectable } from '@nestjs/common';
import { Prisma, Chat } from '@prisma/client';
import PrismaService from 'src/libs/prisma/prisma.service';

@Injectable()
export default class ChatService {
  constructor(private prismaService: PrismaService) {}
  async create(data: Prisma.ChatCreateInput): Promise<Chat> {
    return this.prismaService.chat.create({ data });
  }
}
