import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Password {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  password: string;

  @Column({ nullable: true })
  date: string;
}
