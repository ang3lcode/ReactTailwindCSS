/**
 * this funtion calcula total price orde
 * @param {array} products cartProduct: array of objects 
 * @returns {numer} total price
 */
export const totalPrice = (products) => {
    let sum = 0;
    products.forEach(product => sum += product.price);
    return sum; 
}
