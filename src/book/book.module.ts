import { Module } from '@nestjs/common';
import { BookController } from './book.controller';
import { BookService } from './book.service';
import {MongooseModule} from '@nestjs/mongoose'
import { BookSchema } from './schemas/book.schema';
// import { BookService } from './book.service';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Book', schema: BookSchema }])], 
  //last kudaris
  controllers: [BookController],
  providers: [BookService]
})
export class BookModule {}
