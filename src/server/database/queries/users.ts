import { Query } from "..";

const getAll = () => Query("SELECT * FROM users");
const getOne = (id: number) => Query("SELECT * FROM users WHERE id=?", [id]);
const create = (name: string, id: number) => Query("INSERT INTO users (name, id) VALUES (?, ?)", [name, id]);
const update = (name: string, id: number) => Query("UPDATE users SET name=? WHERE id=?", [name, id]);
const destroy = (id: number) => Query("DELETE FROM users WHERE id=?", [id]);

const getInfo = () => Query("SELECT (name, id) FROM users")

export default {
    getAll, 
    getOne, 
    create, 
    update, 
    destroy
};