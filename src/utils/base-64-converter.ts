import { LoginPayload } from 'src/auth/dtos/loginPayload.dto';

export const authorizationToLoginPayload = (
  authorization: string,
): LoginPayload => {
  const [, token] = authorization.split('.');
  if (token.length < 3 || !token[1]) {
    return undefined;
  }

  return JSON.parse(Buffer.from(token, 'base64').toString('ascii'));
};
