import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { GeoserviceService } from './geoservice.service';
import { GeoserviceController } from './geoservice.controller';

import { Geoservice } from './entities/geoservice.entity';

@Module({
  controllers: [GeoserviceController],
  providers: [GeoserviceService],
  imports: [TypeOrmModule.forFeature([Geoservice])],
})
export class GeoserviceModule {}
