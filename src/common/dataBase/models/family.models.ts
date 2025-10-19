import {
  AutoIncrement,
  Column,
  DataType,
  Model,
  PrimaryKey,
  AllowNull,
  Table,
} from 'sequelize-typescript';

@Table({
  tableName: 'family',
  timestamps: true, // ✅ Enable if you want createdAt/updatedAt
})
export class Family extends Model<Family> {
  @PrimaryKey
  @AutoIncrement
  @Column(DataType.INTEGER)
  declare id: number; // ✅ `declare` avoids shadowing warnings

  @AllowNull(false)
  @Column(DataType.STRING)
  declare Name: string;

  @AllowNull(false)
  @Column(DataType.STRING)
  declare father_name: string;

  @AllowNull(false)
  @Column(DataType.ENUM('Son', 'Daughter'))
  declare Relation: 'Son' | 'Daughter';

  @AllowNull(false)
  @Column(DataType.INTEGER)
  declare Age: number;

  @AllowNull(false)
  @Column(DataType.ENUM('Male', 'Female'))
  declare Gender: 'Male' | 'Female';

  @AllowNull(false)
  @Column(DataType.STRING)
  declare Address: string;
}
