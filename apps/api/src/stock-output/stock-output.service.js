"use strict";
var __esDecorate = (this && this.__esDecorate) || function (ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
    function accept(f) { if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected"); return f; }
    var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
    var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
    var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
    var _, done = false;
    for (var i = decorators.length - 1; i >= 0; i--) {
        var context = {};
        for (var p in contextIn) context[p] = p === "access" ? {} : contextIn[p];
        for (var p in contextIn.access) context.access[p] = contextIn.access[p];
        context.addInitializer = function (f) { if (done) throw new TypeError("Cannot add initializers after decoration has completed"); extraInitializers.push(accept(f || null)); };
        var result = (0, decorators[i])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
        if (kind === "accessor") {
            if (result === void 0) continue;
            if (result === null || typeof result !== "object") throw new TypeError("Object expected");
            if (_ = accept(result.get)) descriptor.get = _;
            if (_ = accept(result.set)) descriptor.set = _;
            if (_ = accept(result.init)) initializers.unshift(_);
        }
        else if (_ = accept(result)) {
            if (kind === "field") initializers.unshift(_);
            else descriptor[key] = _;
        }
    }
    if (target) Object.defineProperty(target, contextIn.name, descriptor);
    done = true;
};
var __runInitializers = (this && this.__runInitializers) || function (thisArg, initializers, value) {
    var useValue = arguments.length > 2;
    for (var i = 0; i < initializers.length; i++) {
        value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
    }
    return useValue ? value : void 0;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StockOutputService = void 0;
const common_1 = require("@nestjs/common");
const errors_1 = require("../../../../../../../../../src/errors");
let StockOutputService = (() => {
    let _classDecorators = [(0, common_1.Injectable)()];
    let _classDescriptor;
    let _classExtraInitializers = [];
    let _classThis;
    var StockOutputService = class {
        static { _classThis = this; }
        static {
            const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
            __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
            StockOutputService = _classThis = _classDescriptor.value;
            if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
            __runInitializers(_classThis, _classExtraInitializers);
        }
        prismaService;
        constructor(prismaService) {
            this.prismaService = prismaService;
        }
        async create(createStockOutputDto) {
            const product = await this.prismaService.product.findUnique({
                where: { id: createStockOutputDto.product_id },
            });
            if (!product) {
                throw new errors_1.NotFoundError('Product not found');
            }
            if (product.quantity === 0) {
                throw new Error("Product out of stock");
            }
            if (createStockOutputDto.quantity > product.quantity) {
                throw new Error("Insufficient product quantity");
            }
            // Transação do banco de dados | begin
            const result = await this.prismaService.$transaction([
                this.prismaService.stockOutput.create({
                    data: {
                        productId: createStockOutputDto.product_id,
                        quantity: createStockOutputDto.quantity,
                    }
                }),
                this.prismaService.product.update({
                    where: { id: createStockOutputDto.product_id },
                    data: {
                        quantity: {
                            decrement: createStockOutputDto.quantity,
                        }
                    }
                })
            ]);
            return result[0];
        }
        findAll() {
            return this.prismaService.stockInput.findMany();
        }
        async findOne(id) {
            try {
                return await this.prismaService.stockInput.findUniqueOrThrow({
                    where: { id },
                });
            }
            catch (error) {
                if (error.code === 'P2025') {
                    throw new errors_1.NotFoundError(`Stock Output with ID ${id} not found`);
                }
                throw error;
            }
        }
    };
    return StockOutputService = _classThis;
})();
exports.StockOutputService = StockOutputService;
