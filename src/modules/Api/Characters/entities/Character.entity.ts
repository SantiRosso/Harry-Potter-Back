import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Character {
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  name: string;

  @Column()
  house: string;

  @Column()
  age: number;

  @Column()
  alive: boolean;
}
