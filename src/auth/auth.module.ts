import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { UserModule } from 'src/user/user.module';
import { JwtModule } from '@nestjs/jwt';

@Module({
  providers: [AuthService],
  controllers: [AuthController],
  imports: [
    UserModule,
    JwtModule.registerAsync({
      useFactory: () => ({
        global: true,
        secret: 'djsfkfosdjo',
        signOptions: { expiresIn: '7d' },
      }),
    }),
  ],
})
// eslint-disable-next-line prettier/prettier
export class AuthModule { }
