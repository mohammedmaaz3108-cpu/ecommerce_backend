import {
  AllowNull,
  AutoIncrement,
  Column,
  DataType,
  Model,
  PrimaryKey,
  Table,
} from 'sequelize-typescript';
import { Models } from 'src/common/models/models';

@Table({
  tableName: 'list',
  timestamps: true,
})
export class List extends Model<List> {
  @PrimaryKey
  @AutoIncrement
  @Column(DataType.INTEGER)
  declare id: number;

  @AllowNull(false)
  @Column(DataType.STRING)
  Brand: string;

  @AllowNull(false)
  @Column(DataType.STRING)
  Processor: string;

  @AllowNull(false)
  @Column(DataType.INTEGER)
  Battery: number;

  @AllowNull(false)
  @Column(DataType.INTEGER)
  Storage: number;

  @AllowNull(false)
  @Column(DataType.ENUM('Black', 'White', 'Red', 'Blue', 'Green'))
  Color: string;

  @AllowNull(false)
  @Column(DataType.INTEGER)
  Price: number;
}
