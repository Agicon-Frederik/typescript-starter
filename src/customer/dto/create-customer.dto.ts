import { IsEmail, IsNotEmpty, IsString } from "class-validator";

export class CreateCustomerDto {

    @IsNotEmpty()
    @IsString()
    readonly name: string;

    @IsNotEmpty()
    @IsEmail()
    readonly email: string;

    readonly phone?: string;

    readonly address?: {
      street: string;
      city: string;
      state: string;
      zipCode: string;
      country: string;
    };
    
    @IsNotEmpty()
    readonly isActive: boolean;
  }