import { CreateStockOutputDto } from './dto/create-stock-output.dto';
import { PrismaService } from 'src/prisma/prisma.service';
export declare class StockOutputService {
    private prismaService;
    constructor(prismaService: PrismaService);
    create(createStockOutputDto: CreateStockOutputDto): Promise<any>;
    findAll(): any;
    findOne(id: number): Promise<any>;
}
//# sourceMappingURL=stock-output.service.d.ts.map