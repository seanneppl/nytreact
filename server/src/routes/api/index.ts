import { Router } from 'express';
import articlesRoutes from "./articles";
import searchRoutes from "./search";

const router: Router = Router();

router.use("/articles", articlesRoutes);
router.use("/search", searchRoutes);

export default router;
