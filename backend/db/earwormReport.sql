DROP DATABASE IF EXISTS earwormReport;
CREATE DATABASE earwormReport;

\c earwormReport;

CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  username VARCHAR NOT NULL UNIQUE
);

CREATE TABLE genres (
  id SERIAL PRIMARY KEY,
  genre_name VARCHAR NOT NULL UNIQUE
);

CREATE TABLE songs (
  id SERIAL PRIMARY KEY,
  title VARCHAR NOT NULL,
  img_url VARCHAR NOT NULL,
  user_id INT NOT NULL REFERENCES users(id),
  genre_id INT NOT NULL REFERENCES genres(id)
);

CREATE TABLE favorites (
  id SERIAL PRIMARY KEY,
  user_id INT NOT NULL REFERENCES users(id),
  song_id INT NOT NULL REFERENCES songs(id)
);

CREATE TABLE comments (
  id SERIAL PRIMARY KEY,
  comment_body VARCHAR NOT NULL,
  user_id INT NOT NULL REFERENCES users(id),
  song_id INT NOT NULL REFERENCES songs(id)
);
