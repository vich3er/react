export interface ICartCarts {
	carts: ICart[];
	total: number;
	skip: number;
	limit: number;
}
export interface ICartCartsProducts {
	id: number;
	title: string;
	price: number;
	quantity: number;
	total: number;
	discountPercentage: number;
	discountedTotal: number;
	thumbnail: string;
}
export interface ICart{
	id: number;
	products: ICartCartsProducts[];
	total: number;
	discountedTotal: number;
	userId: number;
	totalProducts: number;
	totalQuantity: number;
}