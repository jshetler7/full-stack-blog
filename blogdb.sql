CREATE SCHEMA blog;
USE blog;


CREATE TABLE Blogs (
	id INT AUTO_INCREMENT PRIMARY KEY,
	title VARCHAR(256) NOT NULL,
	content VARCHAR(500) NOT NULL,
	authorid INT,
	_created DATETIME DEFAULT CURRENT_TIMESTAMP,
    _updated DATETIME ON UPDATE CURRENT_TIMESTAMP,
	FOREIGN KEY (authorid) REFERENCES Authors(id));
    
ALTER TABLE Blogs ADD FOREIGN KEY (authorid) REFERENCES Authors(id);
ALTER TABLE Blogs MODIFY authorid CHAR(60);
ALTER TABLE Authors ADD password CHAR(60);
ALTER TABLE Authors MODIFY email VARCHAR(128) UNIQUE;
ALTER TABLE Authors MODIFY password CHAR(60) AFTER username;
ALTER TABLE Authors ADD roles VARCHAR(128) DEFAULT "[\"author\"]" AFTER email;
SELECT * FROM Authors;
SELECT * FROM Blogs;
SELECT * FROM BlogTags;
DELETE BlogTags FROM BlogTags JOIN Blogs ON Blogs.id = BlogTags.blogid JOIN Authors ON Authors.id = Blogs.authorid WHERE Blogid=7 AND authorid=3 OR roles='admin';
SELECT * FROM Blogs JOIN Authors ON Authors.id = Blogs.authorid WHERE Blogs.id=9 AND authorid=2 OR roles LIKE '%admin%';

ALTER TABLE Authors modify id char(36);
ALTER TABLE Blogs DROP FOREIGN KEY blogs_ibfk_1;



CREATE TABLE Authors (
	id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(64) NOT NULL,
    username VARCHAR(64) NOT NULL,
    email VARCHAR(128) NOT NULL,
    _created DATETIME DEFAULT CURRENT_TIMESTAMP,
    _updated DATETIME ON UPDATE CURRENT_TIMESTAMP);
    

CREATE TABLE Hashtags (
	id INT AUTO_INCREMENT PRIMARY KEY,
    tagname VARCHAR(32),
    _created DATETIME DEFAULT CURRENT_TIMESTAMP,
    _updated DATETIME ON UPDATE CURRENT_TIMESTAMP);
    

CREATE TABLE BlogTags (
blogid INT,
tagid INT,
PRIMARY KEY (blogid, tagid),
FOREIGN KEY (blogid) REFERENCES Blogs(id),
FOREIGN KEY (tagid) REFERENCES Hashtags(id));

INSERT INTO Authors (name, username, email) VALUES ('Jared', 'Zearo', 'zearo@test.io'), ('Austin', 'Quiserix', 'quiserix@test.io');

INSERT INTO Blogs (title, content, authorid) VALUES ('Blogs', 'this is a blog', 1), ('The prequels are better than the original trilogy', 'Minus attack of the clones, of course. that anakin and padme relationship was cringe af.', 2);

INSERT INTO Hashtags (tagname) VALUES ('Writing'), ('Star Wars'), ('Awesome');

INSERT INTO BlogTags (blogid, tagid) VALUES (1, 3), (1, 1), (2, 2), (2, 3);

SELECT Hashtags.tagname, Hashtags.id FROM BlogTags JOIN Hashtags ON Hashtags.id = Blogtags.tagid WHERE blogid = 1;

SELECT Hashtags.tagname, Hashtags.id FROM BlogTags JOIN Hashtags ON Hashtags.id = Blogtags.tagid WHERE blogid = 2;

SELECT Authors.name, Blogs.*, blogTags.tagid, Hashtags.tagname
FROM Authors
INNER JOIN Blogs ON Blogs.authorid = Authors.id
INNER JOIN blogTags ON blogid = Blogs.id
INNER JOIN Hashtags ON Hashtags.id = blogTags.tagid; 


DELIMITER $$

CREATE PROCEDURE spBlogTags (id INT) 
BEGIN

SELECT Hashtags.tagname, Hashtags.id FROM BlogTags JOIN Hashtags ON Hashtags.id = Blogtags.tagid WHERE blogid = id;

END$$

DELIMITER ;

CALL spBlogTags (2);

SELECT * FROM Blogs;
SELECT * FROM BlogTags WHERE blogid=1;
SELECT * FROM Hashtags;
SELECT Blogs.*, BlogTags.tagid, Authors.name, Authors.username, Authors.email, Authors._created FROM Blogs JOIN BlogTags ON BlogTags.blogid = Blogs.id JOIN Authors ON Authors.id = Blogs.authorid WHERE authorid=1;



















    
    
    
    
    
    
    
    
    
    