import { Controller, Get, Header, Param, Post, Redirect, Req } from '@nestjs/common';

@Controller('cat')
export class CatController {

    public allCatList = []

    @Get('list')
    catNames(@Req() req:Request): string[]{
        return this.allCatList;
    }

    @Post('create')
    // @Redirect('http://localhost:3000/cat/list',301) can be overwritted if response is sets url value
    createCat(@Req() req:Request){
        let name = req.body['name']
        this.allCatList.push(name)
        return `new cat enrolled named ${name}` 
    }

}
