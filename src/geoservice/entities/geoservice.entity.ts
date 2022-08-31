import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Geoservice {
  @PrimaryGeneratedColumn('uuid')
  id: string;
  @Column('float')
  latitude: number;
  @Column('float')
  langitude: number;
  @Column({ type: 'timestamp', nullable: true })
  timestamp: Date;
}
