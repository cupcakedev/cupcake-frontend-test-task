import { Controller, Get } from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { MarketStateOutputDto } from './market-state.output.dto';
import { MarketStateThirdService } from './market-state-third.service';

@ApiTags('Third market')
@Controller('third')
export class MarketStateThirdController {
  constructor(private marketStateThirdService: MarketStateThirdService) {}
  @ApiResponse({ type: MarketStateOutputDto, status: 200, description: "Get current market state" })
  @Get()
  getThird(): any {
    return this.marketStateThirdService.getState();
  }
  @ApiResponse({ type: MarketStateOutputDto, status: 200, description: "Resolve, when new market state is available" })
  @Get('poll')
  getThirdPoll() {
    return this.marketStateThirdService.getNextState();
  }
}
