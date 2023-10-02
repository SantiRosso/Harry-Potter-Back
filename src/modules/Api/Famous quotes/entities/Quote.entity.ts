import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Quote {
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  quote: string;

  @Column()
  date: string;

  @Column()
  author: string;
}
