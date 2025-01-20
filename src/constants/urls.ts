const baseUrl = "https://dummyjson.com"

export const usersUrl = {
    getAllUsers : `${baseUrl}/users`,
    getUserById : (userId: number)=> baseUrl + "/users" + userId}

export const cartsUrl = {
    getAllCarts : `${baseUrl}/carts`,
    getCartsByUserId : (userId: number) =>  { return baseUrl + '/carts/user/' + userId}
}