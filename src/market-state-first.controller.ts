import { Controller, Get } from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { MarketStateOutputDto } from './market-state.output.dto';
import { MarketStateFirstService } from './market-state-first.service';

@ApiTags('First market')
@Controller('first')
export class MarketStateFirstController {
  constructor(private marketStateFirstService: MarketStateFirstService) {}
  @ApiResponse({ type: MarketStateOutputDto, status: 200 })
  @Get()
  getFirst(): any {
    return this.marketStateFirstService.getState();
  }
  @ApiResponse({ type: MarketStateOutputDto, status: 200 })
  @Get('poll')
  getFirstPoll() {
    return this.marketStateFirstService.getNextState();
  }
}
