import News from "../models/news.model.js";

export async function getNews(req, res) {
  try {
    const { limit } = req.query;
    const news = await News.find().limit(Number(limit) || undefined);

    return res.status(200).json(news);
  } catch (error) {
    console.log(error);
    return res.status(500).json("Something went wrong!");
  }
}

export async function createNews(req, res) {
  try {
    const newsItem = News.create(req.body);

    return res.status(200).json(newsItem);
  } catch (error) {
    console.log(error);
    return res.status(500).json("Something went wrong!");
  }
}

export async function getNewsItem(req, res) {
  try {
    const id = req.params.id;
    const newsItem = await News.findById(id);

    if (!newsItem) return res.status(404).json("Новость не найдена!");

    return res.status(200).json(newsItem);
  } catch (error) {
    console.log(error);
    return res.status(500).json("Something went wrong!");
  }
}
