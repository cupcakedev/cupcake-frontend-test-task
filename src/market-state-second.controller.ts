import { Controller, Get } from '@nestjs/common';
import {ApiResponse, ApiTags} from '@nestjs/swagger';
import { MarketStateOutputDto } from './market-state.output.dto';
import { MarketStateSecondService } from './market-state-second.service';

@ApiTags('Second market')
@Controller('second')
export class MarketStateSecondController {
  constructor(private marketStateSecondService: MarketStateSecondService) {}
  @Get()
  getSecond(): any {
    return this.marketStateSecondService.getState();
  }
  @ApiResponse({ type: MarketStateOutputDto, status: 200 })
  @Get('poll')
  getSecondPoll() {
    return this.marketStateSecondService.getNextState();
  }
}
