import * as express from 'express';
import db_tags from '../../database/queries/tags';
const router = express.Router();

router.get('/', async (req, res) => {
    try {
        const tags = await db_tags.getAllTags();
        res.json(tags);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Jared broke something"});
    }
});


export default router;