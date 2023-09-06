import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Creature {
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  name: string;

  @Column()
  Type: string;

  @Column()
  description: number;

  @Column()
  alive: boolean;
}
