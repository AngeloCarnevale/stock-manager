import { StockInputService } from './stock-input.service';
import { CreateStockInputDto } from './dto/create-stock-input.dto';
export declare class StockInputController {
    private readonly stockInputService;
    constructor(stockInputService: StockInputService);
    create(createStockInputDto: CreateStockInputDto): Promise<any>;
    findAll(): any;
    findOne(id: string): Promise<any>;
}
//# sourceMappingURL=stock-input.controller.d.ts.map