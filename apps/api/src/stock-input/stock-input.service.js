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
exports.StockInputService = void 0;
const common_1 = require("@nestjs/common");
const errors_1 = require("../../../../../../../../../src/errors");
let StockInputService = (() => {
    let _classDecorators = [(0, common_1.Injectable)()];
    let _classDescriptor;
    let _classExtraInitializers = [];
    let _classThis;
    var StockInputService = class {
        static { _classThis = this; }
        static {
            const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
            __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
            StockInputService = _classThis = _classDescriptor.value;
            if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
            __runInitializers(_classThis, _classExtraInitializers);
        }
        prismaService;
        constructor(prismaService) {
            this.prismaService = prismaService;
        }
        async create(createStockInputDto) {
            const product = await this.prismaService.product.findUnique({
                where: { id: createStockInputDto.product_id },
            });
            if (!product) {
                throw new errors_1.NotFoundError('Product not found');
            }
            // Transação do banco de dados | begin
            const result = await this.prismaService.$transaction([
                this.prismaService.stockInput.create({
                    data: {
                        productId: createStockInputDto.product_id,
                        quantity: createStockInputDto.quantity,
                    }
                }),
                this.prismaService.product.update({
                    where: { id: createStockInputDto.product_id },
                    data: {
                        quantity: {
                            increment: createStockInputDto.quantity,
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
                    throw new errors_1.NotFoundError(`Stock Input with ID ${id} not found`);
                }
                throw error;
            }
        }
    };
    return StockInputService = _classThis;
})();
exports.StockInputService = StockInputService;
