import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Ceshi {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  age: number;
}
