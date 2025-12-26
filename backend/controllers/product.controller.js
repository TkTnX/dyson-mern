import Product from "../models/product.model.js";

export async function getProducts(req, res) {
  try {
    const products = await Product.find();

    return res.status(200).json(products);
  } catch (error) {
    console.log(error);
    return res.status(500).json(error);
  }
}

export async function getProduct(req, res) {
  try {
    const id = req.params.productId;
    const product = await Product.findById(id);

    if (!product) {
      return res.status(404).json("Product not found!");
    }

    return res.status(200).json(product);
  } catch (error) {
    console.log(error);
    return res.status(500).json(error);
  }
}
