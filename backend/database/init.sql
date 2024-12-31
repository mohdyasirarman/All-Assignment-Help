CREATE TABLE IF NOT EXISTS orders (
    orderid INTEGER PRIMARY KEY,
    title VARCHAR(256) NOT NULL,
    descrip VARCHAR(1500) NOT NULL,
    sub VARCHAR(64) NOT NULL,
    typ VARCHAR(64) NOT NULL,
    deadline INTEGER NOT NULL
);

CREATE TABLE IF NOT EXISTS orders_file (
    orderid INTEGER UNIQUE NOT NULL,
    file_name VARCHAR(256) NOT NULL,
    original_file_name VARCHAR(256) NOT NULL
);

CREATE TABLE IF NOT EXISTS auth (
    id INTEGER PRIMARY KEY,
    key VARCHAR(256) UNIQUE NOT NULL
);

CREATE TABLE IF NOT EXISTS teachers (
    id INTEGER PRIMARY KEY,
    name VARCHAR(256) NOT NULL,
    email VARCHAR(256) UNIQUE NOT NULL,
    contact VARCHAR(256) UNIQUE NOT NULL,
    password VARCHAR(256) NOT NULL
);

CREATE TABLE IF NOT EXISTS order_details (
    id INTEGER PRIMARY KEY,
    orderid INTEGER UNIQUE,
    teacher_id INTEGER,
    status INTEGER NOT NULL
);

CREATE TABLE IF NOT EXISTS admins (
    id INTEGER PRIMARY KEY,
    adminID VARCHAR(256) UNIQUE NOT NULL,
    password VARCHAR(256) UNIQUE NOT NULL
);

CREATE TABLE IF NOT EXISTS orders_value (
    id INTEGER PRIMARY KEY,
    orderid INTEGER UNIQUE NOT NULL,
    value REAL
);

CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY,
    name VARCHAR(256) NOT NULL,
    email VARCHAR(256) UNIQUE NOT NULL,
    password VARCHAR(256) NOT NULL,
    role VARCHAR(50) DEFAULT 'user',
    contact VARCHAR(256),
    createdAt DATETIME DEFAULT CURRENT_TIMESTAMP,
    updatedAt DATETIME DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS user_orders (
    userid INTEGER NOT NULL,
    orderid INTEGER UNIQUE NOT NULL
);
