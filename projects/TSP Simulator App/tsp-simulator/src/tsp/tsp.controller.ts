import { Controller, Post, Body, Get, Param, NotFoundException } from '@nestjs/common';
import { TspService } from './tsp.service';
import { IsNotEmpty, IsString } from 'class-validator';

class TokenizeDto {
  @IsString()
  @IsNotEmpty()
  pan: string;
}

@Controller('tsp')
export class TspController {
  constructor(private readonly tspService: TspService) {}

  @Post('tokenize')
  tokenize(@Body() tokenizeDto: TokenizeDto) {
    const token = this.tspService.generateToken(tokenizeDto.pan);
    return { token };
  }

  @Get('detokenize/:token')
  detokenize(@Param('token') token: string) {
    const pan = this.tspService.getPan(token);
    if (!pan) {
      throw new NotFoundException('Token not found');
    }
    return { pan };
  }
}
