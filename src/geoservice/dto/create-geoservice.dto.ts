import { Min, Max, IsNumber } from 'class-validator';
import { Type } from 'class-transformer';

export class CreateGeoserviceDto {
  @IsNumber()
  @Type(() => Number)
  @Min(-90)
  @Max(90)
  latitude: number;
  @IsNumber()
  @Type(() => Number)
  @Min(-90)
  @Max(90)
  longitude: number;
}
