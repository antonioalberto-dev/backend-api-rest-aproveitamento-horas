import { Get, Injectable, Post, Req, Res, UseInterceptors } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { File } from 'src/Mongo/Schemas/arquivo.schema';

@Injectable()
export class ArquivosService {
    constructor(@InjectModel('File') private readonly fileModel: Model<File>) { }

    async uploadFile(file: Express.Multer.File): Promise<File> {

        const { originalname, mimetype, filename, size } = file;

        const newFile = new this.fileModel({
            filename,
            originalname,
            mimetype,
            size,
            path: filename,
        });
        return newFile.save();
    }

    async getFiles(): Promise<File[]> {
        return this.fileModel.find().exec();
    }

    async getFileById(id: string): Promise<File> {
        return this.fileModel.findById(id).exec();
    }
}

