import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Geoservice {
  @PrimaryGeneratedColumn('uuid')
  id: string;
  @Column('float')
  latitude: number;
  @Column('float')
  longitude: number;
  @Column({ type: 'timestamptz', default: () => 'CURRENT_TIMESTAMP' })
  Timestamp: Date;
}
