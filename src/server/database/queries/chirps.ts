import { Query } from "..";
import { Chirps, CreatableUpdatableChirp } from "../../types";

const getAll = () => Query<Chirps[]>("SELECT chirps.*, users.name FROM chirps JOIN users ON chirps.userid = users.id ORDER BY _created DESC LIMIT 25");
const getOne = (userid: number) => Query<Chirps[]>("SELECT chirps.*, users.name FROM chirps JOIN users ON chirps.userid = users.id WHERE chirps.id=?", [userid]);
const create = (content: string, userid: number) => Query("INSERT INTO chirps (content, userid) VALUES (?, ?)", [content, userid]);
const update = (id: number, pizza: CreatableUpdatableChirp) => Query("UPDATE chirps SET ? WHERE id=?", [pizza, id]);
const destroy = (userid: number) => Query("DELETE FROM chirps WHERE id=?", [userid]);
const allUser = (userid: number) => Query<Chirps[]>("SELECT chirps.*, users.name FROM chirps JOIN users on chirps.userid = users.id WHERE chirps.userid=? ORDER BY _created DESC", [userid]);

export default {
    getAll, 
    getOne, 
    create, 
    update, 
    destroy,
    allUser
};