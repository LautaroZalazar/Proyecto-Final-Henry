const {Product} = require("../db")

async function getProductByName (name) {
    let product = await Product.findOne({ 
        where: {name}
    })
    return product
}

module.exports = {getProductByName}