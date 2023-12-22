import { StockOutputService } from './stock-output.service';
import { CreateStockOutputDto } from './dto/create-stock-output.dto';
export declare class StockOutputController {
    private readonly stockOutputService;
    constructor(stockOutputService: StockOutputService);
    create(createStockOutputDto: CreateStockOutputDto): Promise<any>;
    findAll(): any;
    findOne(id: string): Promise<any>;
}
//# sourceMappingURL=stock-output.controller.d.ts.map