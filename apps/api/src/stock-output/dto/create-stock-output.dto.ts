import { IsInt, IsNotEmpty, IsPositive } from "class-validator"

export class CreateStockOutputDto {
    @IsNotEmpty()
    @IsInt()
    @IsPositive()
    product_id: number;

    @IsNotEmpty()
    @IsInt()
    @IsPositive()   
    quantity: number;
}