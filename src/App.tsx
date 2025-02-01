import './App.css'
import {useApi} from "./hooks/UseApi.ts";
export interface U {
	products: UProducts[];
	total: number;
	skip: number;
	limit: number;
}
export interface UProductsDimensions {
	width: number;
	height: number;
	depth: number;
}
export interface UProductsReviews {
	rating: number;
	comment: string;
	date: string;
	reviewerName: string;
	reviewerEmail: string;
}
export interface UProductsMeta {
	createdAt: string;
	updatedAt: string;
	barcode: string;
	qrCode: string;
}
export interface UProducts {
	id: number;
	title: string;
	description: string;
	category: string;
	price: number;
	discountPercentage: number;
	rating: number;
	stock: number;
	tags: string[];
	brand: string;
	sku: string;
	weight: number;
	dimensions: UProductsDimensions;
	warrantyInformation: string;
	shippingInformation: string;
	availabilityStatus: string;
	reviews: UProductsReviews[];
	returnPolicy: string;
	minimumOrderQuantity: number;
	meta: UProductsMeta;
	images: string[];
	thumbnail: string;
}


function App() {
 const res= useApi<U>('https://dummyjson.com/products');
    console.log(res);

    console.log(res);
    //  setRes(null);
 //   console.log(res);
    return (
      <>

      </>
  )
}

export default App
