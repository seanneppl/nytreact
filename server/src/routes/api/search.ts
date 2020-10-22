import { Router } from 'express';
import searchController from "../../controllers/searchController";

const router: Router = Router();

router.route("/:query")
  .get(searchController.search)

export default router;