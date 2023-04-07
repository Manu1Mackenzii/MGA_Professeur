
import { IsNotEmpty, IsEmail } from 'class-validator';

export class Professeur {
  id: number;

  @IsNotEmpty()
  nom: string;

  @IsNotEmpty()
  prenom: string;

  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  matiere: string;

  @IsNotEmpty()
  specialite: string;
}

