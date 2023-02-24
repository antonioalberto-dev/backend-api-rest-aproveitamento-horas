import { Controller, Get, Injectable, Post, Req, Res, UseInterceptors } from '@nestjs/common';
import * as multer from 'multer';
import * as path from 'path';

import { ArquivosService } from 'src/Services/arquivos/arquivos.service';


const storage = multer.diskStorage({
    destination: './uploads/',
    filename: function (req, file, cb) {
        cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
    },
});

@Controller('arquivos')
@Injectable()
export class ArquivoController {
    constructor(private readonly appService: ArquivosService) { }

    @Post('upload')
    @UseInterceptors(
        multer({ storage: storage }).single('file'),
    )
    async upload(@Req() req, @Res() res) {
        const file = req.file;
        const savedFile = await this.appService.uploadFile(file);
        res.json(savedFile);
    }

    @Get('files')
    async getFiles(@Req() req, @Res() res) {
        const files = await this.appService.getFiles();
        res.json(files);
    }

    @Get('files/:id')
    async getFileById(@Req() req, @Res() res) {
        const id = req.params.id;
        const file = await this.appService.getFileById(id);
        res.json(file);
    }
}
