import Review from "../models/review.model.js";

export async function getReviews(req, res) {
  try {
    const { limit, page } = req.query;

    const reviews = await Review.find()
      .limit(limit || undefined)
      .skip(+limit * +page);
    const total = await Review.countDocuments();
    const totalPages = Math.ceil(total / +limit);

    return res.status(200).json({ items: reviews, total, totalPages });
  } catch (error) {
    console.log(error);
    return res.status(500).json("Something went wrong!");
  }
}

export async function createReview(req, res) {
  try {
    const {
      title,
      text,
      rating,
      images,
      // user,
      productId,
    } = req.body;

    const review = await Review.create({
      title,
      text,
      rating,
      images,
      product: productId,
    });

    return res.status(200).json(review);
  } catch (error) {
    console.log(error);
    return res.status(500).json("Something went wrong!");
  }
}
