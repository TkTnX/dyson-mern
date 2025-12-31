import Review from "../models/review.model.js";
import Product from "../models/product.model.js";
export async function getReviews(req, res) {
  try {
    const { limit, page, ...query } = req.query;
    const reviews = await Review.find(query)
      .limit(limit || undefined)
      .skip(+limit * +page)
      .sort({ created_at: "desc" });
    const total = await Review.countDocuments(query);
    const totalPages = Math.ceil(total / +limit);

    return res.status(200).json({ items: reviews, total, totalPages });
  } catch (error) {
    console.log(error);
    return res.status(500).json("Something went wrong!");
  }
}

export async function createReview(req, res) {
  try {
    const { title, text, rating, images, username, productId } = req.body;
    console.log(req.body);

    const product = await Product.findById(productId);

    if (!product) {
      return res.status(404).json("Продукт не найден!");
    }

    const productReviews = await Review.find({ product });

    let productTotalRating = productReviews.reduce(
      (sum, review) => sum + review.rating,
      0
    );

    const review = await Review.create({
      title,
      text,
      rating,
      images,
      product: product._id,
      username,
    });

    productTotalRating += review.rating;
    const newRating = Math.round(
      productTotalRating / (productReviews.length + 1)
    );

    product.rating = newRating;
    product.save();
    return res.status(200).json(review);
  } catch (error) {
    console.log(error);
    return res.status(500).json("Something went wrong!");
  }
}

export async function deleteReview(req, res) {
  try {
    const reviewId = req.params.id;

    const review = await Review.findById(reviewId);

    if (!review) {
      return res.status(404).json("Отзыв не найден!");
    }

    await Review.deleteOne({ _id: reviewId });

    return res.status(204).json("Успешно!");
  } catch (error) {
    console.log(error);
    return res.status(500).json("Something went wrong!");
  }
}
