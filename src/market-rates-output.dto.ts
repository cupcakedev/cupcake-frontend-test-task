import { ApiProperty } from '@nestjs/swagger';

export class MarketRatesOutputDto {
  @ApiProperty()
  RUB: number;
  @ApiProperty()
  USD: number;
  @ApiProperty()
  EUR: number;
}
