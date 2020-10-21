import { Router } from 'express';
import articlesController from "../../controllers/articlesController";

const router: Router = Router();

router.route("/")
  .get(articlesController.findAll)
  .post(articlesController.create);

router
  .route("/:id")
  .get(articlesController.findById)
  .put(articlesController.update)
  .delete(articlesController.remove);

export default router;