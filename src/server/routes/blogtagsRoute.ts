import * as express from 'express';
import db_blogtags from '../database/queries/blogtags';
const router = express.Router();


router.get('/', async (req, res) => {
    try {
        const tags = await db_blogtags.getAllBlogTags();
        res.json(tags);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Jared broke something"});
    }
});

router.get('/:id', async (req, res) => {
    try {
        const blogid = Number(req.params.id);
        const blogtag = await db_blogtags.getOneBlogTag(blogid);

        res.json(blogtag);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Jared broke something"});
    }
})


router.post('/', async (req, res) => {
    try {
        const { blogid, tagid } = req.body;
        console.log(req.body);
        const results = await db_blogtags.createBlogTag(blogid, tagid);
        res.status(201).json({ message: "Successfully created post!", id: results.insertId });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Jared broke something"});
    }
})

export default router;