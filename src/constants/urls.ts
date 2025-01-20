const baseUrl = "https://dummyjson.com"

export const usersUrl = {
    getAllUsers : 'https://dummyjson.com/users?sortBy=firstName&order=asc'
        //`${baseUrl}/users`,
}

export const cartsUrl = {
    getAllCarts : `${baseUrl}/carts`,
    getCartsByUserId : (userId: number) =>  { return baseUrl + '/carts/user/' + userId}
}