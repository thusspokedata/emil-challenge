import {
  BadRequestException,
  Injectable,
  InternalServerErrorException,
  Logger,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateGeoserviceDto } from './dto/create-geoservice.dto';

import { Geoservice } from './entities/geoservice.entity';

@Injectable()
export class GeoserviceService {
  private readonly logger = new Logger('GeoserviceService');
  constructor(
    @InjectRepository(Geoservice)
    private readonly geoserviceRepository: Repository<Geoservice>,
  ) {}

  async create(createGeoserviceDto: CreateGeoserviceDto) {
    try {
      const ping = this.geoserviceRepository.create(createGeoserviceDto);
      await this.geoserviceRepository.save(ping);
    } catch (error) {
      this.handleDBExceptions(error);
    }
  }

  findAll() {
    return this.geoserviceRepository.find({});
  }

  private handleDBExceptions(error: any) {
    if (error.code === '23505') throw new BadRequestException(error.detail);

    this.logger.error(error);
    throw new InternalServerErrorException(
      'Unexpected error! check server logs',
    );
  }
}
