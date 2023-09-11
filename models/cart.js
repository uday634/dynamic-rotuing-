const fs = require('fs');
const path = require('path')

const p = path.join(
    path.dirname(process.mainModule.filename),
    'data',
    'products.json'
  );


module.exports = class Cart{
    static addProduct(id, productPrice){
        //fetch the previous cart
        fs.readFile(p, (err, fileContent)=> {
            let cart = {products: [], totalPrince:0};
            if(!err) {
                cart = JSON.parse(fileContent);
            }
        })
        //analyze the cart => find existing product
        const existingProductIndex = cart.products.findIndex(prod => prod.id === id);
        const existingProduct = cart.products[existingProductIndex]
        let updatedProduct;
        //add new prodcut/ increase quantity
        
        if(existingProduct){
            updatedProduct = {...existingProduct};
            updatedProduct.qty = updatedProduct.qty +1;
            cart.products = [...cart.products]
            cart.products[existingProductIndex] = updatedProduct
        }else{
            updatedProduct = { id: id,qty: 1};
            cart.product = [...cart.product, updatedProduct]
        }
        cart.totalPrince = cat.totalPrince+ productPrice
        fs.writeFile(p, JSON.stringify(cart), err=>{
            console.log(err);
        })
    }
}