import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class House {
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  name: string;

  @Column()
  description: string;
}
