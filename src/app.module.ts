import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';

@Module({
  // Importar informações doSevice de módulo
  imports: [UserModule],
  // Controllers: Verbos
  controllers: [],
  // Services: Lógica
  providers: [],
})
export class AppModule { }
