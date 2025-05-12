import {User, defaultAdmin} from '../models/User';

export function login(user: User): boolean {
  return (
    user.email === defaultAdmin.email && user.password === defaultAdmin.password
  );
}
