import { Controller, Get, Post, Body, Patch, Param, Delete, Res, HttpStatus } from '@nestjs/common';
import { StockService } from './stock.service';
import { CreateStockDto } from './dto/create-stock.dto';
import { UpdateStockDto } from './dto/update-stock.dto';

@Controller('stock')
export class StockController {
  constructor(private readonly stockService: StockService) { }

  @Post()
  create(@Body() gameId: number, @Res() response) {
    this.stockService.create(gameId).then(stock => {
      response.status(HttpStatus.CREATED).json(stock);
    }).catch((error: Error) => {
      response.status(HttpStatus.FORBIDDEN).json(error.message);
    });
  }

  @Get()
  findAll() {
    return this.stockService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.stockService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateStockDto: UpdateStockDto) {
    return this.stockService.update(+id, updateStockDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.stockService.remove(+id);
  }
}
