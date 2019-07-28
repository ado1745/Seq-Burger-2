DROP DATABASE IF EXISTS burgers_sequelize_db;
CREATE DATABASE burgers_sequelize_db;

USE burgers_sequelize_db;

CREATE TABLE burger
(
    id INT NOT NULL
    AUTO_INCREMENT,
    burger_name VARCHAR
    (50) NOT NULL,
    devoured BOOLEAN DEFAULT false,
    PRIMARY KEY
    (id)
);