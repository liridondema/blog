import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

// it tells TypeORM that this is an entity
@Entity()
export class Post {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  content: string;
}
