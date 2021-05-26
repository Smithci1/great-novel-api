CREATE DATABASE novels;

CREATE USER 'readers'@'localhost' IDENTIFIED BY 'reader1';

GRANT ALL ON novels.* TO 'readers'@'localhost';

use novels;

insert into booksGenres (bookid, genreid) values (1,1),(1,2),(1,3),(2,1),(2,2),(2,3),(2,4),(3,1),(3,5),(4,1),(4,5),(4,6),(4,7),(5,1),(5,5),(6,1),(6,5),(6,8),(6,9),(7,1),(7,5),(7,10),(7,11),(8,1),(8,12),(8,13),(8,14),(9,1),(9,15),(9,2),(10,1),(10,7),(10,12),(11,1),(11,12),(12,1),(12,15),(12,16),(13,1),(13,15),(13,16),(14,1),(14,15),(14,17),(15,1),(15,5),(15,18); 
use novels;

create table booksGenres (
id int auto_increment,
bookid int,
genreid int,
createdAt DATETIME DEFAULT NOW(),
  updatedAt DATETIME DEFAULT NOW() ON UPDATE NOW(),
  deletedAt DATETIME,
  PRIMARY KEY(id),
  FOREIGN KEY (bookid) REFERENCES Books(id),
  FOREIGN KEY (genreid) REFERENCES Genres(id)
);

use novels;
select * from genres;
create table Genres (
id int auto_increment,
genre varchar(255),
createdAt DATETIME DEFAULT NOW(),
  updatedAt DATETIME DEFAULT NOW() ON UPDATE NOW(),
  deletedAt DATETIME,
  PRIMARY KEY(id)
);
use novels;



create table Books (
id int auto_increment,
authorid int,
title varchar(255),
createdAt DATETIME DEFAULT NOW(),
  updatedAt DATETIME DEFAULT NOW() ON UPDATE NOW(),
  deletedAt DATETIME,
  PRIMARY KEY(id),
  FOREIGN KEY (authorid) REFERENCES Authors(id)
);
use novels;

create table authors (
id int auto_increment,
firstName varchar(255),
lastName varchar(255),
createdAt DATETIME DEFAULT NOW(),
  updatedAt DATETIME DEFAULT NOW() ON UPDATE NOW(),
  deletedAt DATETIME,
  PRIMARY KEY(id)
);
insert into booksGenres (bookid, genreid) values (1,1), (2,2), (3,3), (4,4), (5,5), (6,6), (7,7), (8,8), (9,9), (10,10), (11,11), (12,12), (13,13), (14,14), (15,15),(16,16), (17,17),(18,18);
insert into genres (genre) values ('Fiction'), ('Horror'), ('Fantasy'),('Gothic'),('Historical Fiction'),('War'),('Russian Literature'),('Drama'),('Plays'),('Adventure'),('French Literature'),('Mystery'),('Crime'),('Thriller'),('Science Fiction'),('Dystopia'),('Time Travel'),('African Literature');
insert into authors (firstName, lastName) values ('Bram', 'Stoker'),('Oscar','Wilde'),
('Alice','Walker'),('Leo','Tolstoy'),('Charles','Dickens'),('Arthur','Miller'),('Alexandre','Dumas'),('Arthur','Conan Doyle'),('Robert','Louis Stevenson'),
('Fyodor','Dostoyevsky'),('Agatha','Christie'),('Ray','Bradbury'),('George','Orwell'),
('H.G.','Wells'),('Chinua','Achebe');
 

insert into Books (authorid,title) values (1,'Dracula'),(2,'The Picture of Dorian Gray'),(3,'The Color Purple'),(4,'War and Peace'),
(5,'A Tale of Two Cities'),(6,'The Crucible'),(7,'The Three Musketeers'),(8,'The Hound of the Baskervilles'),(9,'The Strange Case of Dr. Jekyll and Mr. Hyde'),
(10,'Crime and Punishment'),(11,'Murder on the Orient Express'),(12,'Fahrenheit 451'),(13,'Animal Farm'),(14,'The Time Machine'),(15,'Things Fall Apart');