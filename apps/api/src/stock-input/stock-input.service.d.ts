import { CreateStockInputDto } from './dto/create-stock-input.dto';
import { PrismaService } from 'src/prisma/prisma.service';
export declare class StockInputService {
    private prismaService;
    constructor(prismaService: PrismaService);
    create(createStockInputDto: CreateStockInputDto): Promise<any>;
    findAll(): any;
    findOne(id: number): Promise<any>;
}
//# sourceMappingURL=stock-input.service.d.ts.map