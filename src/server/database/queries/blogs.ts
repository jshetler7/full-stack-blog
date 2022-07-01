import { Query } from "..";
import { Blogs, BlogsWithAuthor, BlogWithEverything, CreatableUpdatableBlog } from "../../types";

const getAll = () => Query<Blogs[]>("SELECT blogs.*, authors.name FROM blogs JOIN authors ON blogs.authorid = authors.id ORDER BY _created DESC LIMIT 25");
const getOne = (authorid: number) => Query<Blogs[]>("SELECT blogs.*, authors.name FROM blogs JOIN authors ON blogs.authorid = authors.id WHERE blogs.id=?", [authorid]);
const create = (title: string, content: string, authorid: number) => Query("INSERT INTO blogs (title, content, authorid) VALUES (?, ?, ?)", [title, content, authorid]);
const update = (id: number, pizza: CreatableUpdatableBlog) => Query("UPDATE blogs SET ? WHERE id=?", [pizza, id]);
const destroy = (authorid: number) => Query("DELETE FROM blogs WHERE id=?", [authorid]);
const allAuthor = (authorid: number) => Query<BlogsWithAuthor[]>("SELECT blogs.*, authors.name, authors.email FROM blogs JOIN authors on blogs.authorid = authors.id WHERE blogs.authorid=? ORDER BY _created DESC", [authorid]);
const getFullBlog = () => Query<BlogWithEverything>("SELECT Authors.name, Blogs.*, blogTags.tagid, Hashtags.tagname FROM Authors INNER JOIN Blogs ON Blogs.authorid = Authors.id INNER JOIN blogTags ON blogid = Blogs.id INNER JOIN Hashtags ON Hashtags.id = blogTags.tagid");
const blogsProcedure = (id: number) => Query<Blogs>("CALL spBlogTags(?)", [id]);


export default {
    getAll, 
    getOne, 
    create, 
    update, 
    destroy,
    allAuthor,
    getFullBlog,
    blogsProcedure
};