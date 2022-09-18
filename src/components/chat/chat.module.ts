import { Module } from '@nestjs/common';
import ChatService from './message.service';

@Module({
  providers: [ChatService],
})
export default class ChatModule {}
