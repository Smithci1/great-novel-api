CREATE DATABASE novels;

CREATE USER 'readers'@'localhost' IDENTIFIED BY 'reader1';

GRANT ALL ON novels.* TO 'readers'@'localhost';

use novels;
drop table ;
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

insert into authors (firstName, lastName) values ('Bram', 'Stoker'),('Oscar','Wilde'),
('Alice','Walker'),('Leo','Tolstoy'),('Charles','Dickens'),('Arthur','Miller'),('Alexandre','Dumas'),('Arthur','Conan Doyle'),('Robert','Louis Stevenson'),
('Fyodor','Dostoyevsky'),('Agatha','Christie'),('Ray','Bradbury'),('George','Orwell'),
('H.G.','Wells'),('Chinua','Achebe');
select * from authors;

insert into Books (title) values (''),