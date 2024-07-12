import { Sequelize } from 'sequelize-typescript';
import { User } from '../users/user.entitiy';

console.log('KAVO ubit');
console.log(process.env.MYSQL_USER);

setTimeout(()=> (console.log('KAVO ubit')), 3000)
export const databaseProviders = [
  {
    provide: 'SEQUELIZE',
    useFactory: async () => {
      const sequelize = new Sequelize({
        dialect: 'mysql',
        host: 'localhost',
        port: 3306,
        username: process.env.MYSQL_USER,
        password: process.env.MYSQL_PASSWORD,
        database: process.env.MYSQL_DATABASE,
      });
      sequelize.addModels([User]);
      await sequelize.sync();
      return sequelize;
    },
  },
];
