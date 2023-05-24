import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
//import { GamesController } from './games/games.controller';
import { UsersController } from './users/users.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersService } from './users/users.service';
import { User } from './users/user/user.entity';
import { GamesController } from './games/games.controller';
import { GamesService } from './games/games.service';
import { Game } from './games/game/game.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'shinobi',
      password: 'jutsu',
      database: 'shinobi_store',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,
      logging: true,

    }),
    TypeOrmModule.forFeature([User, Game])
  ],
  controllers: [AppController, UsersController, GamesController],
  providers: [AppService, UsersService, GamesService],
})
export class AppModule { }
