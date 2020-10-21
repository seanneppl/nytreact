import { connect } from "mongoose";
import db from "../models";

const uri: string = process.env.ATLAS_URI || '';

connect(uri);

const articleSeed = [
  {
    title: "The Dead Zone",
    url: "https://www.nytimes.com/2018/07/05/magazine/art-of-war.html",
    pubdate: "2018-08-02T14:30:04+0000",
    date: new Date(Date.now())
  },
  {
    title: "Lord of the Flies",
    url: "https://www.nytimes.com/2018/07/05/magazine/art-of-war.html",
    pubdate: "2018-08-02T14:30:04+0000",
    date: new Date(Date.now())
  },
  {
    title: "The Catcher in the Rye",
    url: "https://www.nytimes.com/2018/07/05/magazine/art-of-war.html",
    pubdate: "2018-08-02T14:30:04+0000",
    date: new Date(Date.now())
  },
  {
    title: "The Punch Escrow",
    url: "https://www.nytimes.com/2018/07/05/magazine/art-of-war.html",
    pubdate: "2018-08-02T14:30:04+0000",
    date: new Date(Date.now())
  },
  {
    title: "Harry Potter and the Sorcerer's Stone",
    url: "https://www.nytimes.com/2018/07/05/magazine/art-of-war.html",
    pubdate: "2018-08-02T14:30:04+0000",
    date: new Date(Date.now())
  },
  {
    title: "Coraline",
    url: "https://www.nytimes.com/2018/07/05/magazine/art-of-war.html",
    pubdate: "2018-08-02T14:30:04+0000",
    date: new Date(Date.now())
  },
  {
    title: "Code: The Hidden Language of Computer Hardware and Software",
    url: "https://www.nytimes.com/2018/07/05/magazine/art-of-war.html",
    pubdate: "2018-08-02T14:30:04+0000",
    date: new Date(Date.now())
  },
  {
    title: "The Everything Store: Jeff Bezos and the Age of Amazon",
    url: "https://www.nytimes.com/2018/07/05/magazine/art-of-war.html",
    pubdate: "2018-08-02T14:30:04+0000",
    date: new Date(Date.now())
  },
  {
    title: "Total Recall: My Unbelievably True Life Story",
    url: "https://www.nytimes.com/2018/07/05/magazine/art-of-war.html",
    pubdate: "2018-08-02T14:30:04+0000",
    date: new Date(Date.now())
  },
  {
    title: "Elon Musk: Tesla, SpaceX, and the Quest for a Fantastic Future",
    url: "https://www.nytimes.com/2018/07/05/magazine/art-of-war.html",
    pubdate: "2018-08-02T14:30:04+0000",
    date: new Date(Date.now())
  }
];

db.Article
  .remove({})
  .then(() => db.Article.collection.insertMany(articleSeed))
  .then((data) => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch((err: Error) => {
    console.error(err);
    process.exit(1);
  });
