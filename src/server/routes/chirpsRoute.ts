import * as express from 'express';
import db_chirps from '../database/queries/chirps';
const router = express.Router();

router.get('/', async (req, res) => {
    try {
        const allChirps = await db_chirps.getAll();

        res.json(allChirps);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Jared broke something"});
    }
});

router.get('/users/:id', async (req, res) => {
    try {
        const id = Number(req.params.id);
        const user = await db_chirps.allUser(id);
        res.json(user);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Jared broke something"});
    }
})

router.get('/:id', async (req, res) => {
    try {
        const id = Number(req.params.id);
        const chirp = await db_chirps.getOne(id);

        res.json(chirp[0]);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Jared broke something" });
    }
});


router.delete('/:id', async (req, res) => {
    try {
        const id = Number(req.params.id);
        await db_chirps.destroy(id);

        res.json({ message: "Chirp deleted!"});
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Jared broke something" });
    }
});

router.post('/', async (req, res) => {
    try {
        const { content, userid } = req.body;
        console.log(req.body);
        const results = await db_chirps.create(content, userid);
        res.status(201).json({ message: "Successfully created post!", id: results.insertId })

    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Jared broke something" });
    }
});

router.put('/:id', async (req, res) => {
    try {
        const id = Number(req.params.id);
        const { content, userid } = req.body;
        await db_chirps.update(id, { content, userid });
        res.status(201).json({ message: "Successfully updated post!" });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Jared broke something"});
    }
});



export default router;