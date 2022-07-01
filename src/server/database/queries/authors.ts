import { Query } from "..";

const getAll = () => Query("SELECT * FROM authors");
const getOne = (id: number) => Query("SELECT * FROM authors WHERE id=?", [id]);
const create = (name: string, id: number) => Query("INSERT INTO authors (name, id) VALUES (?, ?)", [name, id]);
const update = (name: string, id: number) => Query("UPDATE authors SET name=? WHERE id=?", [name, id]);
const destroy = (id: number) => Query("DELETE FROM authors WHERE id=?", [id]);

const getInfo = () => Query("SELECT (name, id) FROM authors")

export default {
    getAll, 
    getOne, 
    create, 
    update, 
    destroy
};