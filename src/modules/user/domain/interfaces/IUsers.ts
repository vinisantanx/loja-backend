import { UUID } from "crypto";

export interface Adress {
  Street: string;
  City: string;
  State: string;
  ZipCode: string;
  Number: string;
  Complement?: string;
}

export default interface IUser{
Id: UUID;
Name: string;
Email: string;
Password: string;
phoneNumber: string;
Adress: Adress;
Role: string;
CreatedAt: Date;
UpdatedAt: Date;
DeletedAt?: Date;
IsActive: boolean;
}

