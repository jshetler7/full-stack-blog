import * as express from 'express';
import { v4 as uuid} from 'uuid';
import * as bcrypt from 'bcrypt';
import db_authors from '../../database/queries/authors';


const router = express.Router();

router.post('/', async (req, res) => {
    try {
        const { email, password, name, username } = req.body;
        const id = uuid();

        const hashed = bcrypt.hashSync(password, 12);

        await db_authors.create({ id, email, password: hashed, name, username });

        res.status(201).json({ message: 'New Author Created!!', id});

    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Jared broke something, whoops.'});
    }
})

export default router;