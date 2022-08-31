import { PartialType } from '@nestjs/mapped-types';
import { CreateGeoserviceDto } from './create-geoservice.dto';

export class UpdateGeoserviceDto extends PartialType(CreateGeoserviceDto) {}
