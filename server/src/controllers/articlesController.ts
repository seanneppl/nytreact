import { Response, Request } from 'express';
import { IArticle } from '../models/article'
import db from "../models";

const articlesController = {
  findAll: function (req: Request, res: Response): void {
    db.Article
      .find(req.query)
      .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findById: function (req: Request, res: Response): void {
    db.Article
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  create: function (req: Request, res: Response): void {
    db.Article
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  update: function (req: Request, res: Response): void {
    db.Article
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  remove: function (req: Request, res: Response): void {
    console.log("controller id", req.params.id);
    db.Article
      .findById({ _id: req.params.id })
      .then((dbModel: IArticle | null) => { if (dbModel) dbModel.remove() })
      .then(dbModel => res.json(dbModel))
      .catch((err: Error) => res.status(422).json(err));
  }
};

export default articlesController;