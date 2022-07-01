import { Query } from "..";
import { Hashtags, BlogTags } from "../../types";

const getAllTags = () => Query<Hashtags[]>("SELECT * FROM Hashtags");


export default {
getAllTags
};