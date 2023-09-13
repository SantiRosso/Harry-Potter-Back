import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Professor {
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column()
  age: number;

  @Column()
  alive: boolean;
}
