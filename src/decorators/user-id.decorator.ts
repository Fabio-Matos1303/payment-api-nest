import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { authorizationToLoginPayload } from 'src/utils/base-64-converter';

export const UserId = createParamDecorator((_, ctx: ExecutionContext) => {
  const { authorization } = ctx.switchToHttp().getRequest().headers;

  const loginPayload = authorizationToLoginPayload(authorization);

  const userId = loginPayload?.id;

  console.log(userId);
  return userId;
});
