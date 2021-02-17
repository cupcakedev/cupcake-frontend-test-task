import { Controller, Get } from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { MarketStateOutputDto } from './market-state.output.dto';
import { MarketStateFirstService } from './market-state-first.service';

@ApiTags('First market')
@Controller('first')
export class MarketStateFirstController {
  constructor(private marketStateFirstService: MarketStateFirstService) {}
  @ApiResponse({ type: MarketStateOutputDto, status: 200, description: "Get current market state" })
  @Get()
  getFirst(): any {
    return this.marketStateFirstService.getState();
  }
  @ApiResponse({ type: MarketStateOutputDto, status: 200, description: "Resolve, when new market state is available" })
  @Get('poll')
  getFirstPoll() {
    return this.marketStateFirstService.getNextState();
  }
}
