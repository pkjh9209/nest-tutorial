import { Controller, Get, Param, Req } from '@nestjs/common';
import { Request } from 'express';

@Controller('cats')
export class CatsController {
    @Get()
    findAll(@Req() request: Request): string {
        console.log(request);
        return 'This action returns all cats';
    }

    @Get(':id')
    find(@Param() params):string{
        console.log(params.id);
        return `This action returns a #${params.id} cat`;
    }

}