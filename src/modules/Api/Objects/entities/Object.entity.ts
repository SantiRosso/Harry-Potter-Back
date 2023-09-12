import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class MagicObject {
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  name: string;

  @Column()
  description: string;

  //   @Column()
  //   images: string[];
}
