import { Injectable } from '@nestjs/common';

@Injectable()
export class TspService {
  private tokens = new Map<string, string>();

  generateToken(pan: string): string {
    const token = 'TOKEN-' + Math.random().toString(36).substr(2, 9).toUpperCase();
    this.tokens.set(token, pan);
    return token;
  }

  getPan(token: string): string | null {
    return this.tokens.get(token) || null;
  }
}
