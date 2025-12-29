import Product from "../models/product.model.js";
import Category from "../models/category.model.js";
export async function getProducts(req, res) {
  try {
    const { sortBy, ...query } = req.query;
    let findString = query;

    const sort = sortBy?.split("-") || undefined;
    console.log(sort);
    if (query.category) {
      const category = await Category.findOne({ slug: query.category });

      if (!category) return res.status(404).json("Категория не найдена!");

      findString.category = category._id;
    }
    console.log(sort);
    const products = await Product.find(findString)
      .sort(sort ? [sort] : undefined)
      .populate("category");

    return res.status(200).json(products);
  } catch (error) {
    console.log(error);
    return res.status(500).json(error);
  }
}

export async function getProduct(req, res) {
  try {
    const id = req.params.productId;
    const product = await Product.findById(id)
      .populate("complectation")
      .populate("specifications")
      .populate("category");

    if (!product) {
      return res.status(404).json("Product not found!");
    }

    return res.status(200).json(product);
  } catch (error) {
    console.log(error);
    return res.status(500).json(error);
  }
}

export async function createProduct(req, res) {
  try {
    const { category, description, images, price, title } = req.body;
    const newProduct = await Product.create({
      category,
      description,
      isStock: true,
      images,
      price,
      title,
    });

    return res.status(201).json(newProduct);
  } catch (error) {
    console.log(error);
    return res.status(500).json(error);
  }
}
