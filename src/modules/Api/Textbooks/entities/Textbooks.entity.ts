import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Textbook {
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  name: string;

  @Column()
  author: string;

  @Column()
  description: number;
}
