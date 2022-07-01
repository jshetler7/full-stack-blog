import * as express from 'express';
import db_authors from '../database/queries/authors';
const router = express.Router();

router.get('/', async (req, res) => {
    try {
        const allAuthors = await db_authors.getAll();

        res.json(allAuthors);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Jared broke something"});
    }
})


router.get('/:id', async (req, res) => {
    try {
        const id = Number(req.params.id);
        const oneAuthor = await db_authors.getOne(id);

        res.json(oneAuthor);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Jared broke something" });
    }
});

export default router;