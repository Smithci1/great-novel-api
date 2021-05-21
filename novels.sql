CREATE DATABASE novels;

CREATE USER 'readers'@'localhost' IDENTIFIED BY 'reader1';

GRANT ALL ON novels.* TO 'readers'@'localhost';

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
create table Authors (
id int auto_increment,
firstName varchar(255),
lastName varchar(255),
createdAt DATETIME DEFAULT NOW(),
  updatedAt DATETIME DEFAULT NOW() ON UPDATE NOW(),
  deletedAt DATETIME,
  PRIMARY KEY(id)
);
