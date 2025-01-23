import {
	ApiResUsersAddress,
	ApiResUsersBank,
	ApiResUsersCompany,
	ApiResUsersCrypto,
	ApiResUsersHair
} from "./ApiRes.ts";

export interface IUser {
	id: number;
	firstName: string;
	lastName: string;
	maidenName: string;
	age: number;
	gender: string;
	email: string;
	phone: string;
	username: string;
	password: string;
	birthDate: string;
	image: string;
	bloodGroup: string;
	height: number;
	weight: number;
	eyeColor: string;
	hair: ApiResUsersHair;
	ip: string;
	address: ApiResUsersAddress;
	macAddress: string;
	university: string;
	bank: ApiResUsersBank;
	company: ApiResUsersCompany;
	ein: string;
	ssn: string;
	userAgent: string;
	crypto: ApiResUsersCrypto;
	role: string;
}