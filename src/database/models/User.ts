import {Table, Column, UpdatedAt, CreatedAt, AutoIncrement, DataType, PrimaryKey, Model} from 'sequelize-typescript';

@Table({
    timestamps: true,
    tableName: 'users',
})

export default class User extends Model<User> {
    @PrimaryKey
    @AutoIncrement
    @Column
    public id: number;

    @Column({
        field: 'firstName',
        type: DataType.STRING,
    })
    public firstName: string;

    @Column({
        field: 'lastName',
        type: DataType.STRING,
    })
    public lastName: string;

    @Column({
        field: 'email',
        type: DataType.STRING,
    })
    public email: string;

    @CreatedAt
    @Column({
        field: 'created_at',
        type: DataType.DATE,
        defaultValue: DataType.NOW,
    })
    public createdAt: Date;

    @UpdatedAt
    @Column({
        field: 'updated_at',
        type: DataType.DATE,
        defaultValue: DataType.NOW,
    })
    public UpdatedAt: Date;
}