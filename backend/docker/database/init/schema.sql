/*
 * Database schema file.
 * Do not put any data in here, only the table schema.
 */
CREATE TABLE login (
    id int NOT NULL,
    email varchar(255) NOT NULL,
    password varchar(255) NOT NULL,
    PRIMARY KEY (id)
);
