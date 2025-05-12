export interface User {
    email: string;
    password: string;
  }
  
  export const defaultAdmin: User = {
    email: 'adm',
    password: 'adm',
  };
  