import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

export enum UserRole {
    ADMIN = "admin",
    MANAGER = "manager",
    USER = "user",
}

@Entity({ name: 'user' })
export class User {
    @PrimaryGeneratedColumn({ unsigned: true })
    id: number;

    @Column('varchar', { length: 50, unique: true })
    username: string;

    @Column('varchar')
    password: string;

    @Column('varchar', { length: 50 })
    name: string;

    @Column('varchar', { length: 100, nullable: true })
    email: string;

    @Column('varchar', { length: 20, nullable: true })
    mobile: string;

    @Column('enum', { enum: UserRole, default: UserRole.USER })
    role: string;

    @Column({ default: true })
    status: boolean;

    @Column('bigint')
    created_at: number;

    @Column('bigint')
    updated_at: number;

}
