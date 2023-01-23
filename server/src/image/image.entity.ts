import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('image')
export class ImageEntity {
  @PrimaryGeneratedColumn({
    type: 'bigint',
  })
  id: string;

  @Column({
    type: 'jsonb',
  })
  variants: any;

  @CreateDateColumn({
    name: 'created_at',
  })
  createdAt: Date;

  @Column({
    array: true,
    type: 'text',
    nullable: true,
  })
  tags: string[];
}
