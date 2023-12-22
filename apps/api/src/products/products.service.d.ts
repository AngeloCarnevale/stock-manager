import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { PrismaService } from 'src/prisma/prisma.service';
export declare class ProductsService {
    private prismaService;
    constructor(prismaService: PrismaService);
    create(createProductDto: CreateProductDto): any;
    findAll(): any;
    findOne(id: number): Promise<any>;
    update(id: number, updateProductDto: UpdateProductDto): Promise<any>;
    remove(id: number): Promise<any>;
}
//# sourceMappingURL=products.service.d.ts.map