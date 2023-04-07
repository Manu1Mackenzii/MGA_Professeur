import { Module } from '@nestjs/common';
import { ProfesseursService } from './professeurs.service';
import { ProfesseursController } from './professeurs.controller';

@Module({
  controllers: [ProfesseursController],
  providers: [ProfesseursService]
})
export class ProfesseursModule {}
