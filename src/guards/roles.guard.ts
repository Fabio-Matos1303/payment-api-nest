import { Injectable, ExecutionContext } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { JwtService } from '@nestjs/jwt';
import { LoginPayload } from 'src/auth/dtos/loginPayload.dto';
import { ROLES_KEY } from 'src/decorators/roles.decorator';
import { Role } from 'src/user/enum/Role';

@Injectable()
export class RolesGuard {
  constructor(
    private readonly reflector: Reflector,
    private readonly jwtService: JwtService,
    // eslint-disable-next-line prettier/prettier
  ) { }

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const requiredRoles = this.reflector.getAllAndOverride<Role[]>(ROLES_KEY, [
      context.getHandler(),
      context.getClass(),
    ]);
    if (!requiredRoles) {
      return true;
    }

    console.log(requiredRoles);

    const { authorization } = context.switchToHttp().getRequest().headers;

    const loginPayload: LoginPayload = await this.jwtService
      .verifyAsync(authorization, {
        secret: 'djsfkfosdjo',
      })
      .catch((e) => console.log(e));

    if (!loginPayload) {
      return false;
    }

    console.log('ID:', loginPayload.id, 'ROLE:', loginPayload.role);

    return requiredRoles.some((role) => role === loginPayload.role);
  }
}
