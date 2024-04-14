import { UserEntity } from 'src/user/entity/user.entity';

export class LoginPayload {
  id: number;
  role: string;

  constructor(user: UserEntity) {
    this.id = user.id;
    this.role = user.role;
  }
}
