import { articlesURL, countryCode, apiKey } from "../config/rest_config";
import { Header } from "react-native/Libraries/NewAppScreen";
export const getArticles = async (category = "general") => {
  try {
    let articles = await fetch(
      `${articlesURL}?country=${countryCode}&category=${category}`,
      {
        headers: {
          "X-API-KEY": apiKey,
        },
      }
    );
    let result = await articles.json();
    articles = null;
    return result.articles;
  } catch (error) {
    console.log(error);
  }
};
