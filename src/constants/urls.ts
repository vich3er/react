const baseUrl = "https://dummyjson.com"

export const usersUrl = {
    getAllUsers : `${baseUrl}/users`,
}

export const cartsUrl = {
    getAllCarts : `${baseUrl}/carts`,
    getCartsByUserId : (userId: number) =>  { return baseUrl + '/carts/user/' + userId}
}