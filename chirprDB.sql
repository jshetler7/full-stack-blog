CREATE SCHEMA chirpr2;
USE chirpr2;

CREATE TABLE users (
id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
name VARCHAR(64) NOT NULL,
email VARCHAR(128) NOT NULL,
password TEXT NULL,
_created datetime default current_timestamp);

drop table if exists chirps;
CREATE TABLE chirps(
id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
userid INT,
FOREIGN KEY (userid) REFERENCES users(id),
content TEXT,
location VARCHAR(64),
_created datetime default current_timestamp);

CREATE TABLE mentions(
userid INT,
chirpid INT,
FOREIGN KEY (userid) REFERENCES users(id),
FOREIGN KEY (chirpid) REFERENCES chirps(id),
PRIMARY KEY (userid, chirpid));


select * from chirps;
select * from users;

drop table users;
alter table chirps drop foreign key chirps_ibfk_1;

SELECT * FROM chirps ORDER BY _created DESC LIMIT 25;

INSERT INTO users (name, email) VALUES ('Will', 'will@test.io'), ('Austin', 'austin@test.io'), ('Isaac', 'isaac@test.io'), ('Brandon', 'brandon@test.io'), ('Kaleb', 'kaleb@test.io'), ('Jackson', 'jackson@test.io'), ('Jacob', 'jacob@test.io'), ('Peyton', 'peyton@test.io'), ('Cool Hand Luke', 'luke@test.io'), ('Zearo', 'zearo@test.io');
INSERT INTO chirps (content, userid) VALUES ('My name is Will and this is my chirp # 1!', '1'), ('My name is Will and this is my chirp # 2!', '1'), ('My name is Will and this is my chirp # 3!', '1'), ('My name is Will and this is my chirp # 4!', '1'), ('My name is Will and this is my chirp # 5!', '1'), ('My name is Will and this is my chirp # 6!', '1'), ('My name is Will and this is my chirp # 7!', '1'), ('My name is Will and this is my chirp # 8!', '1'), ('My name is Will and this is my chirp # 9!', '1'), ('My name is Will and this is my chirp # 10!', '1'), ('My name is Austin and this is my chirp # 1!', '2'), ('My name is Austin and this is my chirp # 2!', '2'), ('My name is Austin and this is my chirp # 3!', '2'), ('My name is Austin and this is my chirp # 4!', '2'), ('My name is Austin and this is my chirp # 5!', '2'), ('My name is Austin and this is my chirp # 6!', '2'), ('My name is Austin and this is my chirp # 7!', '2'), ('My name is Austin and this is my chirp # 8!', '2'), ('My name is Austin and this is my chirp # 9!', '2'), ('My name is Austin and this is my chirp # 10!', '2'), ('My name is Isaac and this is my chirp # 1!', '3'), ('My name is Isaac and this is my chirp # 2!', '3'), ('My name is Isaac and this is my chirp # 3!', '3'), ('My name is Isaac and this is my chirp # 4!', '3'), ('My name is Isaac and this is my chirp # 5!', '3'), ('My name is Isaac and this is my chirp # 6!', '3'), ('My name is Isaac and this is my chirp # 7!', '3'), ('My name is Isaac and this is my chirp # 8!', '3'), ('My name is Isaac and this is my chirp # 9!', '3'), ('My name is Isaac and this is my chirp # 10!', '3'), ('My name is Brandon and this is my chirp # 1!', '4'), ('My name is Brandon and this is my chirp # 2!', '4'), ('My name is Brandon and this is my chirp # 3!', '4'), ('My name is Brandon and this is my chirp # 4!', '4'), ('My name is Brandon and this is my chirp # 5!', '4'), ('My name is Brandon and this is my chirp # 6!', '4'), ('My name is Brandon and this is my chirp # 7!', '4'), ('My name is Brandon and this is my chirp # 8!', '4'), ('My name is Brandon and this is my chirp # 9!', '4'), ('My name is Brandon and this is my chirp # 10!', '4'), ('My name is Kaleb and this is my chirp # 1!', '5'), ('My name is Kaleb and this is my chirp # 2!', '5'), ('My name is Kaleb and this is my chirp # 3!', '5'), ('My name is Kaleb and this is my chirp # 4!', '5'), ('My name is Kaleb and this is my chirp # 5!', '5'), ('My name is Kaleb and this is my chirp # 6!', '5'), ('My name is Kaleb and this is my chirp # 7!', '5'), ('My name is Kaleb and this is my chirp # 8!', '5'), ('My name is Kaleb and this is my chirp # 9!', '5'), ('My name is Kaleb and this is my chirp # 10!', '5'), ('My name is Jackson and this is my chirp # 1!', '6'), ('My name is Jackson and this is my chirp # 2!', '6'), ('My name is Jackson and this is my chirp # 3!', '6'), ('My name is Jackson and this is my chirp # 4!', '6'), ('My name is Jackson and this is my chirp # 5!', '6'), ('My name is Jackson and this is my chirp # 6!', '6'), ('My name is Jackson and this is my chirp # 7!', '6'), ('My name is Jackson and this is my chirp # 8!', '6'), ('My name is Jackson and this is my chirp # 9!', '6'), ('My name is Jackson and this is my chirp # 10!', '6'), ('My name is Jacob and this is my chirp # 1!', '7'), ('My name is Jacob and this is my chirp # 2!', '7'), ('My name is Jacob and this is my chirp # 3!', '7'), ('My name is Jacob and this is my chirp # 4!', '7'), ('My name is Jacob and this is my chirp # 5!', '7'), ('My name is Jacob and this is my chirp # 6!', '7'), ('My name is Jacob and this is my chirp # 7!', '7'), ('My name is Jacob and this is my chirp # 8!', '7'), ('My name is Jacob and this is my chirp # 9!', '7'), ('My name is Jacob and this is my chirp # 10!', '7'), ('My name is Peyton and this is my chirp # 1!', '8'), ('My name is Peyton and this is my chirp # 2!', '8'), ('My name is Peyton and this is my chirp # 3!', '8'), ('My name is Peyton and this is my chirp # 4!', '8'), ('My name is Peyton and this is my chirp # 5!', '8'), ('My name is Peyton and this is my chirp # 6!', '8'), ('My name is Peyton and this is my chirp # 7!', '8'), ('My name is Peyton and this is my chirp # 8!', '8'), ('My name is Peyton and this is my chirp # 9!', '8'), ('My name is Peyton and this is my chirp # 10!', '8'), ('My name is Cool Hand Luke and this is my chirp # 1!', '9'), ('My name is Cool Hand Luke and this is my chirp # 2!', '9'), ('My name is Cool Hand Luke and this is my chirp # 3!', '9'), ('My name is Cool Hand Luke and this is my chirp # 4!', '9'), ('My name is Cool Hand Luke and this is my chirp # 5!', '9'), ('My name is Cool Hand Luke and this is my chirp # 6!', '9'), ('My name is Cool Hand Luke and this is my chirp # 7!', '9'), ('My name is Cool Hand Luke and this is my chirp # 8!', '9'), ('My name is Cool Hand Luke and this is my chirp # 9!', '9'), ('My name is Cool Hand Luke and this is my chirp # 10!', '9'), ('My name is Zearo and this is my chirp # 1!', '10'), ('My name is Zearo and this is my chirp # 2!', '10'), ('My name is Zearo and this is my chirp # 3!', '10'), ('My name is Zearo and this is my chirp # 4!', '10'), ('My name is Zearo and this is my chirp # 5!', '10'), ('My name is Zearo and this is my chirp # 6!', '10'), ('My name is Zearo and this is my chirp # 7!', '10'), ('My name is Zearo and this is my chirp # 8!', '10'), ('My name is Zearo and this is my chirp # 9!', '10'), ('My name is Zearo and this is my chirp # 10!', '10');
















