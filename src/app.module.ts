import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProfesseursModule } from './professeurs/professeurs.module';

@Module({
  imports: [ProfesseursModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
