import { IsInt, IsNotEmpty, IsPositive } from "class-validator"

export class CreateStockInputDto {
    @IsNotEmpty()
    @IsInt()
    @IsPositive()
    product_id: number;

    @IsNotEmpty()
    @IsInt()
    @IsPositive()   
    quantity: number;
}