DROP DATABASE IF EXISTS product;
CREATE DATABASE product;
USE product;

CREATE TABLE product (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  name CHAR(50),
  slogan CHAR(200),
  description CHAR(300),
  category CHAR(50),
  default_price CHAR(30),
  related CHAR(500)
);

CREATE TABLE feature (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  feature CHAR(50),
  value CHAR(50),
  product_id INT
);

CREATE TABLE style (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  style_id INT,
  name CHAR(50),
  original_price CHAR(50),
  sale_price CHAR(50),
  defalut? BOOLEAN,
);

CREATE TABLE photo (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  style_id INT,
  product_id INT,
  thumbnail_url CHAR(200),
  url CHAR(200)
);

CREATE TABLE skus (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  style_id INT,
  product_id INT,
  unit CHAR(20),
  quantity INT,
  size CHAR(20),
)




/* Create other tables and define schemas for them here! */





/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

