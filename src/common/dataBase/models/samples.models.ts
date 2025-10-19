// src/cmmnoo / database / models / sample.model.ts;
import {
  Table,
  Column,
  Model,
  DataType,
  Default,
  AllowNull,
  PrimaryKey,
  AutoIncrement,
  Unique,
} from 'sequelize-typescript';

@Table({
  tableName: 'samples',
  timestamps: true, // Adds createdAt and updatedAt
})
export class Sample extends Model<Sample> {
  @PrimaryKey
  @AutoIncrement
  @Column(DataType.INTEGER)
  declare id: number;

  @AllowNull(false)
  @Column(DataType.STRING)
  string_field: string;

  @AllowNull(false)
  @Column(DataType.TEXT)
  text_field: string;

  @AllowNull(false)
  @Column(DataType.INTEGER)
  integer_field: number;

  @AllowNull(false)
  @Column(DataType.FLOAT)
  float_field: number;

  @AllowNull(false)
  @Column(DataType.DOUBLE)
  double_field: number;

  @AllowNull(false)
  @Column(DataType.DECIMAL(10, 2))
  decimal_field: number;

  @AllowNull(false)
  @Column(DataType.BOOLEAN)
  boolean_field: boolean;

  @AllowNull(false)
  @Column(DataType.DATE)
  date_field: Date;

  @AllowNull(false)
  @Column(DataType.DATEONLY)
  date_only_field: string;

  @AllowNull(true)
  @Default(DataType.NOW)
  @Column(DataType.DATE)
  default_now_field: Date;

  @AllowNull(true)
  @Unique
  @Column(DataType.UUID)
  uuid_field: string;

  @AllowNull(true)
  @Column(DataType.ENUM('option1', 'option2', 'option3'))
  enum_field: 'option1' | 'option2' | 'option3';

  @AllowNull(true)
  @Column(DataType.ARRAY(DataType.STRING)) // Only works on PostgreSQL
  array_field: string[];

  @AllowNull(true)
  @Column(DataType.JSON)
  json_field: object;

  @AllowNull(true)
  @Column(DataType.JSONB)
  jsonb_field: object;

  @AllowNull(true)
  @Column(DataType.BLOB)
  blob_field: Buffer;
}
