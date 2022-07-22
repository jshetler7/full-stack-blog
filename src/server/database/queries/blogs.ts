import { Query } from "..";
import { Blogs, BlogsWithAuthor, BlogWithEverything, CreatableUpdatableBlog } from "../../types";

//7/15/22 changed destroy from authorid to id

const getAll = () => Query<Blogs[]>("SELECT blogs.*, authors.name FROM blogs JOIN authors ON blogs.authorid = authors.id ORDER BY _created DESC LIMIT 25");
const getOne = (authorid: number) => Query<Blogs[]>("SELECT blogs.*, authors.name FROM blogs JOIN authors ON blogs.authorid = authors.id WHERE blogs.id=?", [authorid]);
const create = (title: string, content: string, authorid: number|string) => Query("INSERT INTO blogs (title, content, authorid) VALUES (?, ?, ?)", [title, content, authorid]);
const update = (id: number, pizza: CreatableUpdatableBlog) => Query("UPDATE blogs SET ? WHERE id=?", [pizza, id]);
const destroy = (id: number) => Query("DELETE FROM blogs WHERE id=?", [id]);
const allAuthor = (authorid: number) => Query<BlogsWithAuthor[]>("SELECT blogs.*, authors.name, authors.email FROM blogs JOIN authors on blogs.authorid = authors.id WHERE blogs.authorid=? ORDER BY _created DESC", [authorid]);
const getFullBlog = () => Query<BlogWithEverything>("SELECT Authors.name, Blogs.*, blogTags.tagid, Hashtags.tagname FROM Authors INNER JOIN Blogs ON Blogs.authorid = Authors.id INNER JOIN blogTags ON blogid = Blogs.id INNER JOIN Hashtags ON Hashtags.id = blogTags.tagid");
const blogsProcedure = (id: number) => Query<Blogs>("CALL spBlogTags(?)", [id]);
const authDestroy = (Blogid: number) => Query("DELETE FROM BlogTags WHERE Blogid=?", [Blogid]);
const checkAuthor = (id: number|string, authorid:number|string) => Query<Blogs[]>("SELECT * FROM Blogs WHERE id=? AND authorid=?", [id, authorid]);


export default {
    getAll, 
    getOne, 
    create, 
    update, 
    destroy,
    allAuthor,
    getFullBlog,
    blogsProcedure,
    authDestroy,
    checkAuthor
};