import { IsEmail, IsOptional, IsString } from "class-validator";

export class UpdateCustomerDto {
    @IsOptional()
    @IsString()
    readonly name: string;

    @IsOptional()
    @IsEmail()
    readonly email: string;

    @IsOptional()
    readonly phone?: string;

    @IsOptional()
    readonly address?: {
      street: string;
      city: string;
      state: string;
      zipCode: string;
      country: string;
    };
    
    @IsOptional()
    readonly isActive: boolean;
  }