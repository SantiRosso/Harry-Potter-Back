import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Spell {
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  name: string;

  @Column()
  description: string;
}
