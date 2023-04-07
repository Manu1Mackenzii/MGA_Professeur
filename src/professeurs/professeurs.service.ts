import { Injectable } from '@nestjs/common';
import { CreateProfesseurDto } from './dto/create-professeur.dto';
import { UpdateProfesseurDto } from './dto/update-professeur.dto';

@Injectable()
export class ProfesseursService {
  create(createProfesseurDto: CreateProfesseurDto) {
    return 'This action adds a new professeur';
  }

  findAll() {
    return `This action returns all professeurs`;
  }

  findOne(id: number) {
    return `This action returns a #${id} professeur`;
  }

  update(id: number, updateProfesseurDto: UpdateProfesseurDto) {
    return `This action updates a #${id} professeur`;
  }

  remove(id: number) {
    return `This action removes a #${id} professeur`;
  }
}
