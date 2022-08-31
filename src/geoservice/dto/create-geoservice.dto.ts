import { IsNumber } from 'class-validator';

export class CreateGeoserviceDto {
  @IsNumber()
  latitude: number;
  @IsNumber()
  longitude: number;
}
