import { ProductType } from "../types";
import { PencilSquareIcon } from '@heroicons/react/24/solid'

const TABLE_HEAD = ["Product", "Price", "Quantity", ""];


export function ProductsTable({ products }: { products: ProductType[] }) {
    return (
        <div className="h-full w-full">
            <table className="w-full min-w-max table-auto text-left">
                <thead>
                    <tr>
                        {TABLE_HEAD.map((head) => (
                            <th
                                key={head}
                                className="border-b border-blue-gray-100 bg-blue-gray-50 p-4"
                            >
                                <div
                                    className="font-normal leading-none opacity-70"
                                >
                                    {head}
                                </div>
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {products.map((product, index) => {
                        const isLast = index === products.length - 1;
                        const classes = isLast ? "p-4" : "p-4 border-b border-blue-gray-50";

                        return (
                            <tr key={product.id}>
                                <td className={classes}>
                                    <div
                                        color="blue-gray"
                                        className="font-normal"
                                    >
                                        {product.name}
                                    </div>
                                </td>
                                <td className={classes}>
                                    <div
                                        className="font-normal"
                                    >
                                        R${product.price}
                                    </div>
                                </td>
                                <td className={classes}>
                                    <div
                                        className="font-normal"
                                    >
                                        {product.quantity}
                                    </div>
                                </td>
                                <td className={classes}>
                                    <div>
                                        <PencilSquareIcon
                                            className="text-gray-500 hover:cursor-pointer"
                                            width={25}
                                            onClick={() => console.log("Click")}
                                        />
                                    </div>
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
}