import { User } from './user.entitiy';

export const usersProviders = [
  {
    provide: 'USER_REPOSITORY',
    useValue: User,
  },
];
