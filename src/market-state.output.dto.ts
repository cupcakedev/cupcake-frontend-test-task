import { ApiProperty } from '@nestjs/swagger';
import { MarketRatesOutputDto } from './market-rates-output.dto';

export class MarketStateOutputDto {
  @ApiProperty({ type: MarketRatesOutputDto })
  rates: MarketRatesOutputDto;
  @ApiProperty({ description: ' Base currency ', example: 'CUPCAKE' })
  base: string;
  @ApiProperty({ description: ' Seconds from epoch ', example: 1613456619 })
  timestamp: number;

  @ApiProperty({
    description: ' Date in iso date format',
    example: '2021-02-16',
  })
  date: string;
}
