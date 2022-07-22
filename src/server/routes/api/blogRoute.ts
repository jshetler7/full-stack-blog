import * as express from 'express';
import db_blogs from '../../database/queries/blogs';
import { isAuthor, isAdmin } from '../../middlewares';
const router = express.Router();

router.get('/', async (req, res) => {
    try {
        const allBlogs = await db_blogs.getAll();

        res.json(allBlogs);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Jared broke something"});
    }
});



router.get('/blogtags', async (req, res) => {
    try {
        
        const blogtags = await db_blogs.getFullBlog();
        res.json(blogtags);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Jared broke something" });
    }
})

router.get('/procedure/:id', async (req, res) => {
    try {
        const id = Number(req.params.id);
        const tags = await db_blogs.blogsProcedure(id);
        res.json(tags);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Jared broke something"});
    }
})

router.get('/authors/:id', isAuthor, async (req: any, res) => {
    try {
        const id = Number(req.authorid);
        const author = await db_blogs.allAuthor(id);
        res.json(author);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Jared broke something"});
    }
})



router.get('/:id', async (req, res) => {
    try {
        const id = Number(req.params.id);
        const blog = await db_blogs.getOne(id);
        res.json(blog[0]);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Jared broke something" });
    }
});


router.delete('/:id', isAuthor, async (req, res) => {
    try {
        const id = Number(req.params.id);
        //@ts-ignore
        const checkAuthor = await db_blogs.checkAuthor(id, req.authorid);

        if(checkAuthor.length === 0) {
            res.status(401).json({ message: "Get outta here kid"});
            return
        }

        await db_blogs.authDestroy(id);
        await db_blogs.destroy(id);

        res.json({ message: "Blog deleted!"});
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Jared broke something" });
    }
});

router.post('/', isAuthor, async (req, res) => {
    try {
        const { title, content } = req.body;
        //@ts-ignore
        const results = await db_blogs.create(title, content, req.authorid);
        res.status(201).json({ message: "Successfully created post!", id: results.insertId });

    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Jared broke something" });
    }
});

router.put('/:id', isAuthor, async (req, res) => {
    try {
        const id = Number(req.params.id);
        //@ts-ignore
        const checkAuthor = await db_blogs.checkAuthor(id, req.authorid);

        if(checkAuthor.length === 0) {
            res.status(401).json({ message: "Get outta here kid"});
            return
        }
        
        const { content, authorid } = req.body;
        await db_blogs.update(id, { content, authorid });
        res.status(201).json({ message: "Successfully updated post!" });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Jared broke something"});
    }
});



export default router;