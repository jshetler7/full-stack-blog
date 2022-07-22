import { Query } from "..";
import { BlogTags } from "../../types";

const createBlogTag = (blogid: number, tagid: number) => Query("INSERT INTO BlogTags (blogid, tagid) VALUES (?, ?)", [blogid, tagid]);
const getAllBlogTags = () => Query("SELECT * FROM BlogTags");
const getOneBlogTag = (blogid: number) => Query("SELECT * FROM BlogTags WHERE blogid=?", [blogid]);
// const update = () = Query("UPDATE BlogTags SET  WHERE id=?", [pizza, id]);

export default {
createBlogTag,
getAllBlogTags,
getOneBlogTag
}