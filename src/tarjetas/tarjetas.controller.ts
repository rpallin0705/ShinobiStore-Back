import { Controller, Get, Post, Body, Patch, Param, Delete, Res, HttpStatus } from '@nestjs/common';
import { TarjetasService } from './tarjetas.service';
import { CreateTarjetaDto } from './dto/create-tarjeta.dto';
import { error } from 'console';
import { response } from 'express';

@Controller('tarjetas')
export class TarjetasController {
  constructor(private readonly tarjetasService: TarjetasService) { }

  @Post()
  create(@Body() createTarjetaDto: CreateTarjetaDto, @Res() response) {
    this.tarjetasService.create(createTarjetaDto).then(tarjeta => {
      response.status(HttpStatus.CREATED).json(tarjeta);
    }).catch((error: Error) => {
      response.status(HttpStatus.FORBIDDEN).json(error.message);
    })
  }



  @Get(':id')
  findOne(@Param('id') id: string, @Res() response) {
    this.tarjetasService.findAllUserCreditCard(+id).then(tarjeta => {
      response.status(HttpStatus.CREATED).json(tarjeta);
    }).catch((error: Error) => {
      response.status(HttpStatus.FORBIDDEN).json(error.message);
    })
  }



  @Delete(':id')
  remove(@Param('id') id: string, @Res() response) {
    this.tarjetasService.remove(+id).then(tarjeta => {
      response.status(HttpStatus.OK).json(tarjeta);
    }).catch((error: Error) => {
      response.status(HttpStatus.FORBIDDEN).json(error.message);
    })
  }
}
