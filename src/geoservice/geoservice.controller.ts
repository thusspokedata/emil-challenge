import { Controller, Get, Post, Body } from '@nestjs/common';
import { GeoserviceService } from './geoservice.service';
import { CreateGeoserviceDto } from './dto/create-geoservice.dto';

@Controller('geoservice')
export class GeoserviceController {
  constructor(private readonly geoserviceService: GeoserviceService) {}

  @Post()
  create(@Body() createGeoserviceDto: CreateGeoserviceDto) {
    return this.geoserviceService.create(createGeoserviceDto);
  }

  @Get()
  findAll() {
    return this.geoserviceService.findAll();
  }
}
