DROP TABLE IF EXISTS users;
CREATE TABLE users
(id SERIAL PRIMARY KEY,
username VARCHAR(120),
hash VARCHAR(1000));
SELECT * FROM users;