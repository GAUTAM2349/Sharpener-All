

const Product = require('./../models/products'); 

// Delete a product by ID
const deleteProduct = async (req, res) => {
  console.log("came in delete")
  try {
    const productId = req.params.naam; 

    console.log("i got this id : "+productId);
    return res.end();

    
    const deletedProduct = await Product.destroy({
      where: { id: productId } 
    });

    
    if (!deletedProduct) {
      return res.status(404).send('Product not found');
    }

    console.log(`Product with id ${productId} deleted successfully.`);
    res.redirect('/'); 
  } catch (error) {
    console.error("Error deleting product: " + error);
    res.status(500).send('Error deleting product');
  }
};

module.exports = {
  deleteProduct
};
