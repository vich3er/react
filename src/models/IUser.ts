  interface IUsers {
	users: IUser[];
	total: number;
	skip: number;
	limit: number;
}
  interface IUserUsersHair {
	color: string;
	type: string;
}
  interface IUserUsersAddressCoordinates {
	lat: number;
	lng: number;
}
  interface IUserUsersAddress {
	address: string;
	city: string;
	state: string;
	stateCode: string;
	postalCode: string;
	coordinates: IUserUsersAddressCoordinates;
	country: string;
}
  interface IUserUsersBank {
	cardExpire: string;
	cardNumber: string;
	cardType: string;
	currency: string;
	iban: string;
}
  interface IUserUsersCompanyAddressCoordinates {
	lat: number;
	lng: number;
}
  interface IUserUsersCompanyAddress {
	address: string;
	city: string;
	state: string;
	stateCode: string;
	postalCode: string;
	coordinates: IUserUsersCompanyAddressCoordinates;
	country: string;
}
  interface IUserUsersCompany {
	department: string;
	name: string;
	title: string;
	address: IUserUsersCompanyAddress;
}
  interface IUserUsersCrypto {
	coin: string;
	wallet: string;
	network: string;
}
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
	hair: IUserUsersHair;
	ip: string;
	address: IUserUsersAddress;
	macAddress: string;
	university: string;
	bank: IUserUsersBank;
	company: IUserUsersCompany;
	ein: string;
	ssn: string;
	userAgent: string;
	crypto: IUserUsersCrypto;
	role: string;
}