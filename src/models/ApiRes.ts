import {IUser} from "./IUser.tsx";

export interface ApiRes {
	users: IUser[];
	total: number;
	skip: number;
	limit: number;
}
export interface ApiResUsersHair {
	color: string;
	type: string;
}
export interface ApiResUsersAddressCoordinates {
	lat: number;
	lng: number;
}
export interface ApiResUsersAddress {
	address: string;
	city: string;
	state: string;
	stateCode: string;
	postalCode: string;
	coordinates: ApiResUsersAddressCoordinates;
	country: string;
}
export interface ApiResUsersBank {
	cardExpire: string;
	cardNumber: string;
	cardType: string;
	currency: string;
	iban: string;
}
export interface ApiResUsersCompanyAddressCoordinates {
	lat: number;
	lng: number;
}
export interface ApiResUsersCompanyAddress {
	address: string;
	city: string;
	state: string;
	stateCode: string;
	postalCode: string;
	coordinates: ApiResUsersCompanyAddressCoordinates;
	country: string;
}
export interface ApiResUsersCompany {
	department: string;
	name: string;
	title: string;
	address: ApiResUsersCompanyAddress;
}
export interface ApiResUsersCrypto {
	coin: string;
	wallet: string;
	network: string;
}
