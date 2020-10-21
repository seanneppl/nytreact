import { Router } from 'express';
import searchController from "../../controllers/articlesController";

const router: Router = Router();

router.route("/:query")
  .get(searchController.findAll)

export default router;