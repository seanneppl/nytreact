import { Schema, model, Document } from "mongoose";
// const Schema = mongoose.Schema;

const articleSchema: Schema = new Schema({
  title: { type: String, required: true },
  url: { type: String, required: true },
  pubdate: { type: String, required: true },
  date: { type: Date, default: Date.now }
});

export interface IArticle extends Document {
  title: string
  url: string
  pubdate: string
  date: string
}

const Article = model<IArticle>("Article", articleSchema);

export default Article;
