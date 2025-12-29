import Category from "../models/category.model.js";
export async function getCategories(req, res) {
  try {
    const categories = await Category.find();

    return res.status(200).json(categories);
  } catch (error) {
    console.log(error);
    return res.status(500).json("Something went wrong!");
  }
}
