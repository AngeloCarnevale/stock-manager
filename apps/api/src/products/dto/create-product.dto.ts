import {
  IsNotEmpty,
  IsString,
  MaxLength,
  IsNumber,
  IsPositive,
} from 'class-validator';

// Data Transfer Object
export class CreateProductDto {
  @IsString()
  @IsNotEmpty()
  @MaxLength(255)
  name: string;

  @IsPositive()
  @IsNumber({ maxDecimalPlaces: 2 })
  @IsNotEmpty()
  price: number;
}
