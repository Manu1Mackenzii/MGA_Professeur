import { Controller, Get, Post, Body,Put, Param, Delete } from '@nestjs/common';
import { ProfesseursService } from './professeurs.service';
import { CreateProfesseurDto } from './dto/create-professeur.dto';
import { UpdateProfesseurDto } from './dto/update-professeur.dto';
import { Professeur } from './entities/professeur.entity';

@Controller('professeurs')
export class ProfesseursController {
  private readonly professeurs: Professeur[] = [];
  //constructor(private readonly professeursService: ProfesseursService) {}

  // @Post()
  // create(@Body() createProfesseurDto: CreateProfesseurDto) {
  //   return this.professeursService.create(createProfesseurDto);
  // }

  @Post()
  createProfesseur(@Body() professeur: Professeur): Professeur {
    professeur.id = Date.now();
    this.professeurs.push(professeur);
    return professeur;
  }

  @Get()
  getAllProfesseurs(): Professeur[] {
    return this.professeurs;
  }

  @Get(':id')
  getProfesseurById(@Param('id') id: number): Professeur {
    return this.professeurs.find(professeur => professeur.id === id);
  }
  // @Get()
  // findAll() {
  //   return this.professeursService.findAll();
  // }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.professeursService.findOne(+id);
  // }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateProfesseurDto: UpdateProfesseurDto) {
  //   return this.professeursService.update(+id, updateProfesseurDto);
  // }

  @Put(':id')
  updateProfesseur(@Param('id') id: number, @Body() professeur: Professeur): Professeur {
    const index = this.professeurs.findIndex(professeur => professeur.id === id);
    this.professeurs[index] = { ...this.professeurs[index], ...professeur };
    return this.professeurs[index];
  }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.professeursService.remove(+id);
  // }

  @Delete(':id')
  // deleteProfesseur(@Param('id') id: number): void {
  //   const index = this.professeurs.findIndex(professeur => professeur.id === id);
  //   this.professeurs.splice(index, 1);
    remove(@Param('id') id: number): string {
    return `Professeur ${id} supprimé avec succès`;
  }

}
