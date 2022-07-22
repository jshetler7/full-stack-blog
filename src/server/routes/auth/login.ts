import * as express from 'express';
import * as bcrypt from 'bcrypt';
import * as jwt from 'jsonwebtoken';
import db_authors from '../../database/queries/authors';
import { jwt_config } from '../../config';

const router = express.Router();

router.post('/', async (req, res) => {
    try {
        const { email, password } = req.body;

        const [authors] = await db_authors.getByEmail(email);

        if (!authors) {
            res.status(401).json({ message: 'Unauthorized'});
            return;
        };
        const matched = bcrypt.compareSync(password, authors.password);

        if (matched) {
            const token = jwt.sign({ id: authors.id, roles: authors.roles }, jwt_config.secret, { expiresIn: jwt_config.expiration });



            res.json({ message: 'a match made in heaven!!', token });
        } else {
            res.json({ message: 'oof, better luck next time lmao'});
        }

    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Jared broke something, whoops.'});
    }
})

export default router;