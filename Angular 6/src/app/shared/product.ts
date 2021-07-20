import { Comment } from './comment';
export class Product{
	id:string;
	cart:number;
	name:string;
	image:string;
	category:string;
	price:number;
	desc:string;
	comments:Comment[];
}