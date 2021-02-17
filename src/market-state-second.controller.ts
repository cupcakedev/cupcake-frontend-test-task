import { Controller, Get } from '@nestjs/common';
import {ApiResponse, ApiTags} from '@nestjs/swagger';
import { MarketStateOutputDto } from './market-state.output.dto';
import { MarketStateSecondService } from './market-state-second.service';

@ApiTags('Second market')
@Controller('second')
export class MarketStateSecondController {
  constructor(private marketStateSecondService: MarketStateSecondService) {}
  @ApiResponse({ type: MarketStateOutputDto, status: 200, description: "Get current market state" })
  @Get()
  getSecond(): any {
    return this.marketStateSecondService.getState();
  }
  @ApiResponse({ type: MarketStateOutputDto, status: 200, description: "Resolve, when new market state is available" })
  @Get('poll')
  getSecondPoll() {
    return this.marketStateSecondService.getNextState();
  }
}
