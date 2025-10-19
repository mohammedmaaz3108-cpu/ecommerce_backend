import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello Maaz render!';
  }
  getBye(): string {
    return 'Bye Maaz';
  }
  putAir(): string {
    return 'AIR hello';
  }
}
