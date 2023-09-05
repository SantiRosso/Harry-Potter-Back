import { Module } from '@nestjs/common';
import { ApiModule } from './modules/Api/Api.module';
import { TypeOrmModule } from '@nestjs/typeorm';
require('dotenv').config();
const { BD_PASSWORD, BD_PORT, BD_USERNAME, BD_NAME, BD_HOST } = process.env;

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: BD_HOST,
      port: Number(BD_PORT),
      username: BD_USERNAME,
      password: BD_PASSWORD,
      database: BD_NAME,
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,
    }),
    ApiModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
