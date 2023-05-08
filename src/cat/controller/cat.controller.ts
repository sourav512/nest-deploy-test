import { Body, Controller, Get, Header, Param, Post, Redirect, Req } from '@nestjs/common';
import { CreateCatDTO } from '../../cat/DTO/create-cat.dto';
import { Cat } from '../../cat/interface/cat.interface';
import { CatService } from '../../cat/service/cat.service';

@Controller('cat')
export class CatController {

    constructor(private catService: CatService) {}

    @Get('list')
    async getAllCats(): Promise<Cat[]>{
        return this.catService.findAll()
    }

    @Post('create')
    // @Redirect('http://localhost:3000/cat/list',301) can be overwritted if response is sets url value
    async createCat(@Body() createCatDTO:CreateCatDTO){
        this.catService.create(createCatDTO)
        return `new cat enrolled named ${createCatDTO.name}` 
    }

}
