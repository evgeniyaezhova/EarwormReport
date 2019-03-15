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
  user_id INT NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  song_id INT NOT NULL REFERENCES songs(id) ON DELETE CASCADE
);

CREATE TABLE comments (
  id SERIAL PRIMARY KEY,
  comment_body VARCHAR NOT NULL,
  user_id INT NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  song_id INT NOT NULL REFERENCES songs(id) ON DELETE CASCADE
);

INSERT INTO users(username) VALUES
("Fox"),
("Bear"),
("Llama"),
("Hedgie"),
("Dog"),
("Cat"),
("Fish"),
("Lion"),
("Crab"),
("Octopus");

INSERT INTO genres(genre_name) VALUES
("Pop"),
("Alternative Rock"),
("Hip Hop"),
("Country"),
("R&B");

INSERT INTO songs(title, img_url, user_id, genre_id) VALUES
("Havana", "https://upload.wikimedia.org/wikipedia/en/thumb/9/98/Havana_%28featuring_Young_Thug%29_%28Official_Single_Cover%29_by_Camila_Cabello.png/220px-Havana_%28featuring_Young_Thug%29_%28Official_Single_Cover%29_by_Camila_Cabello.png", 3, 1),
("Thinking Out Loud", "https://img.sheetmusic.direct/catalogue/album/4e3af89b-c436-42d5-924c-5629352dd294/large.jpg", 9, 1),
("Sugar", "https://upload.wikimedia.org/wikipedia/en/thumb/d/d1/Maroon_5_Sugar_cover.png/220px-Maroon_5_Sugar_cover.png", 3, 1),
("Without Me", "https://is1-ssl.mzstatic.com/image/thumb/Music118/v4/c2/f3/92/c2f39257-3ae0-1f85-55a4-f6fa4152ef83/00602577065798.rgb.jpg/170x170bb-85.png", 1, 2),
("Bad Liar", "https://is2-ssl.mzstatic.com/image/thumb/Music118/v4/55/c4/7d/55c47dec-56b9-4f9b-fab4-0f7f394a10a8/00602577199219.rgb.jpg/170x170bb-85.png", 10, 2),
("11 Minutes", "https://is2-ssl.mzstatic.com/image/thumb/Music124/v4/83/ec/6d/83ec6d7e-b9a9-fa3d-0778-0cc2fac39ee2/00602577440618.rgb.jpg/170x170bb-85.png", 6, 2),
("SunFlower", "https://is3-ssl.mzstatic.com/image/thumb/Music128/v4/69/09/dd/6909dd4a-81fc-69ef-2c48-031b1ec2b141/00602577203794.rgb.jpg/170x170bb-85.png", 2, 3),
("Middle Child", "https://is2-ssl.mzstatic.com/image/thumb/Music114/v4/23/83/d9/2383d9d9-c03f-9d99-8502-3896a56fa043/00810760037709.rgb.jpg/170x170bb-85.png", 2, 3),
("Murder on My Mind", "https://is4-ssl.mzstatic.com/image/thumb/Music128/v4/4d/a9/d5/4da9d543-5d55-684b-2343-b4715e500f66/814908026372.jpg/170x170bb-85.png", 5, 3),
("Beautiful Crazy", "https://is2-ssl.mzstatic.com/image/thumb/Music128/v4/fa/8d/22/fa8d22a8-4525-e073-46f7-7f6026578ea6/886447048443.jpg/170x170bb-85.png", 7, 4),
("Girl", "https://is4-ssl.mzstatic.com/image/thumb/Music114/v4/ab/24/5a/ab245a92-79a8-3d66-4fff-a5116908bce8/886447532270.jpg/170x170bb-85.png", 4, 4),
("Rainbow", "https://is3-ssl.mzstatic.com/image/thumb/Music118/v4/7f/21/2a/7f212aa6-68ea-3925-a391-bbe04a2bc673/UMG_cvrart_00602567385714_01_RGB72_3000x3000_18UMGIM03879.jpg/170x170bb-85.png", 4, 4),
("Hard Place", "https://is2-ssl.mzstatic.com/image/thumb/Music118/v4/69/b7/18/69b71895-e319-639c-074b-41e93797abc3/886447397107.jpg/170x170bb-85.png", 8, 5),
("Better", "https://is2-ssl.mzstatic.com/image/thumb/Music128/v4/19/e1/2a/19e12a66-bbd7-bd72-e752-c53c39e2b444/886447357385.jpg/170x170bb-85.png", 9, 5),
("Trip", "https://is2-ssl.mzstatic.com/image/thumb/Music118/v4/d5/74/93/d57493d9-68e3-a71f-718a-820b31a8ef4a/00602577107870.rgb.jpg/170x170bb-85.png", 7, 5);

INSERT INTO favorites(user_id, song_id) VALUES
(1, 5),
(1, 6),
(1, 13),
(1, 15),
(2, 9),
(2, 13),
(2, 14),
(2, 15),
(3, 1),
(3, 2),
(3, 11),
(3, 12),
(4, ),
(),
(),
(),
(),
(),
(),
(),
(),
(),
(),
(),
(),
(),
(),
(),
(),
(),
(),
(),
(),
(),
(),
(),
(),
(),
(),
();

INSERT INTO comments(comment_body, user_id, song_id) VALUES
