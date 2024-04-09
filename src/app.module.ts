import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { UserModule } from './user/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  // Importar informações doSevice de módulo
  imports: [
    ConfigModule.forRoot({
      envFilePath: [`.env.${(process.env.NODE_ENV, 'development')}`],
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: '12345678',
      database: 'postgres',
      entities: [`${__dirname}/**/*.entity{.js,.ts}`],
      migrations: [`${__dirname}/migration/{.ts,*.js}`],
      migrationsRun: true,
    }),
    UserModule,
  ],
  // Controllers: Verbos
  controllers: [],
  // Services: Lógica
  providers: [],
})
// eslint-disable-next-line prettier/prettier
export class AppModule { }
