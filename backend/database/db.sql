CREATE TABLE sqlite_sequence(name,seq);
CREATE TABLE orders(    orderid INTEGER PRIMARY KEY,    title VARCHAR(256) NOT NULL,    descrip VARCHAR(1500) NOT NULL,    sub VARCHAR(64) NOT NULL,    typ VARCHAR(6
CREATE TABLE orders_file(    orderid INTEGER UNIQUE NOT NULL,    file_name VARCHAR(256) UNIQUE NOT NULL,    original_file_name VARCHAR(256) UNIQUE NOT NULL);        
CREATE TABLE auth(id INTEGER PRIMARY KEY,key VARCHAR(256) UNIQUE NOT NULL);
CREATE TABLE teachers(id INTEGER PRIMARY KEY, name VARCHAR(256) NOT NULL,email VARCHAR(256) UNIQUE NOT NULL,contact VARCHAR(256) UNIQUE NOT NULL, password VARCHAR(256) NOT NULL);
CREATE TABLE order_details(id INTEGER PRIMARY KEY,orderid INTEGER UNQIUE,teacher_id INTEGER, status INTEGER NOT NULL);
CREATE TABLE admins(id INTEGER PRIMARY KEY, adminID VARCHAR(256) UNIQUE NOT NULL,password VARCHAR(256) UNIQUE NOT NULL);
CREATE TABLE orders_value(id INTEGER PRIMARY KEY, orderid INTEGER UNIQUE NOT NULL,value REAL);
sqlite> CREATE TABLE users(id INTEGER PRIMARY KEY, name VARCHAR(256) NOT NULL, email VARCHAR(256) UNIQUE NOT NULL,contact VARCHAR(256) UNIQUE,password VARCHAR(256) NOT NULL);
sqlite> create table user_orders(userid INTEGER NOT NULL,orderid INTEGER UNIQUE NOT NULL);
sqlite> .schema                       
CREATE TABLE sqlite_sequence(name,seq);
CREATE TABLE orders(    orderid INTEGER PRIMARY KEY,    title VARCHAR(256) NOT NULL,    descrip VARCHAR(1500) NOT NULL,    sub VARCHAR(64) NOT NULL,    typ VARCHAR(64) NOT NULL,    deadline INTEGER NOT NULL);
CREATE TABLE orders_file(    orderid INTEGER UNIQUE NOT NULL,    file_name VARCHAR(256) UNIQUE NOT NULL,    original_file_name VARCHAR(256) UNIQUE NOT NULL);        
CREATE TABLE auth(id INTEGER PRIMARY KEY,key VARCHAR(256) UNIQUE NOT NULL);
CREATE TABLE teachers(id INTEGER PRIMARY KEY, name VARCHAR(256) NOT NULL,email VARCHAR(256) UNIQUE NOT NULL,contact VARCHAR(256) UNIQUE NOT NULL, password VARCHAR(256) NOT NULL);
CREATE TABLE order_details(id INTEGER PRIMARY KEY,orderid INTEGER UNQIUE,teacher_id INTEGER, status INTEGER NOT NULL);
CREATE TABLE admins(id INTEGER PRIMARY KEY, adminID VARCHAR(256) UNIQUE NOT NULL,password VARCHAR(256) UNIQUE NOT NULL);
CREATE TABLE orders_value(id INTEGER PRIMARY KEY, orderid INTEGER UNIQUE NOT NULL,value REAL);
CREATE TABLE users(id INTEGER PRIMARY KEY, name VARCHAR(256) NOT NULL, email VARCHAR(256) UNIQUE NOT NULL,contact VARCHAR(256) UNIQUE,password VARCHAR(256) NOT NULL);
CREATE TABLE user_orders(userid INTEGER NOT NULL,orderid INTEGER UNIQUE NOT NULL);