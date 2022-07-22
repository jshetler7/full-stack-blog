import { Query } from "..";
import { NewAuthor, Author } from "../../types"

const getAll = () => Query("SELECT * FROM Authors");
const getByEmail = (email: string) => Query<Author[]>("SELECT * FROM Authors WHERE email=?", [email]);
const create = (newAuthor: NewAuthor) => Query("INSERT INTO Authors SET ?", [newAuthor]);
const update = (name: string, id: number) => Query("UPDATE Authors SET name=? WHERE id=?", [name, id]);
const destroy = (id: number) => Query("DELETE FROM Authors WHERE id=?", [id]);



export default {
    getAll,
    getByEmail, 
    create
};