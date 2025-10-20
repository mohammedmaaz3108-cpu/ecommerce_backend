import {
  AllowNull,
  AutoIncrement,
  Column,
  DataType,
  Model,
  PrimaryKey,
  Table,
} from 'sequelize-typescript';

@Table({
  tableName: 'family',
  timestamps: true,
})
export class Family extends Model<Family> {
  @PrimaryKey
  @AutoIncrement
  @Column(DataType.INTEGER)
  declare id: number;

  @AllowNull(false)
  @Column(DataType.STRING)
  declare name: string;

  @AllowNull(false)
  @Column(DataType.STRING)
  declare father_name: string;

  @AllowNull(false)
  @Column(DataType.INTEGER)
  declare age: number;

  @AllowNull(false)
  @Column({
    type: DataType.ENUM('Male', 'Female'),
  })
  declare gender: 'Male' | 'Female';
}
