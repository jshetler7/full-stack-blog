import * as express from 'express';
import db_users from '../database/queries/users';
const router = express.Router();

router.get('/', async (req, res) => {
    try {
        const allUsers = await db_users.getAll();

        res.json(allUsers);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Jared broke something"});
    }
})


router.get('/:id', async (req, res) => {
    try {
        const id = Number(req.params.id);
        const oneUser = await db_users.getOne(id);

        res.json(oneUser);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Jared broke something" });
    }
});

export default router;