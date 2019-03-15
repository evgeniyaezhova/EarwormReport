DROP DATABASE IF EXISTS earwormreport;
CREATE DATABASE earwormreport;

\c earwormreport;

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
('Fox'),
('Bear'),
('Llama'),
('Hedgie'),
('Dog'),
('Cat'),
('Fish'),
('Lion'),
('Crab'),
('Octopus');

INSERT INTO genres(genre_name) VALUES
('Pop'),
('Alternative Rock'),
('Hip Hop'),
('Country'),
('R&B');

INSERT INTO songs(title, img_url, user_id, genre_id) VALUES
('Havana', 'https://upload.wikimedia.org/wikipedia/en/thumb/9/98/Havana_%28featuring_Young_Thug%29_%28Official_Single_Cover%29_by_Camila_Cabello.png/220px-Havana_%28featuring_Young_Thug%29_%28Official_Single_Cover%29_by_Camila_Cabello.png', 3, 1),
('Thinking Out Loud', 'https://img.sheetmusic.direct/catalogue/album/4e3af89b-c436-42d5-924c-5629352dd294/large.jpg', 9, 1),
('Sugar', 'https://upload.wikimedia.org/wikipedia/en/thumb/d/d1/Maroon_5_Sugar_cover.png/220px-Maroon_5_Sugar_cover.png', 3, 1),
('Without Me', 'https://is1-ssl.mzstatic.com/image/thumb/Music118/v4/c2/f3/92/c2f39257-3ae0-1f85-55a4-f6fa4152ef83/00602577065798.rgb.jpg/170x170bb-85.png', 1, 2),
('Bad Liar', 'https://is2-ssl.mzstatic.com/image/thumb/Music118/v4/55/c4/7d/55c47dec-56b9-4f9b-fab4-0f7f394a10a8/00602577199219.rgb.jpg/170x170bb-85.png', 10, 2),
('11 Minutes', 'https://is2-ssl.mzstatic.com/image/thumb/Music124/v4/83/ec/6d/83ec6d7e-b9a9-fa3d-0778-0cc2fac39ee2/00602577440618.rgb.jpg/170x170bb-85.png', 6, 2),
('SunFlower', 'https://is3-ssl.mzstatic.com/image/thumb/Music128/v4/69/09/dd/6909dd4a-81fc-69ef-2c48-031b1ec2b141/00602577203794.rgb.jpg/170x170bb-85.png', 2, 3),
('Middle Child', 'https://is2-ssl.mzstatic.com/image/thumb/Music114/v4/23/83/d9/2383d9d9-c03f-9d99-8502-3896a56fa043/00810760037709.rgb.jpg/170x170bb-85.png', 2, 3),
('Murder on My Mind', 'https://is4-ssl.mzstatic.com/image/thumb/Music128/v4/4d/a9/d5/4da9d543-5d55-684b-2343-b4715e500f66/814908026372.jpg/170x170bb-85.png', 5, 3),
('Beautiful Crazy', 'https://is2-ssl.mzstatic.com/image/thumb/Music128/v4/fa/8d/22/fa8d22a8-4525-e073-46f7-7f6026578ea6/886447048443.jpg/170x170bb-85.png', 7, 4),
('Girl', 'https://is4-ssl.mzstatic.com/image/thumb/Music114/v4/ab/24/5a/ab245a92-79a8-3d66-4fff-a5116908bce8/886447532270.jpg/170x170bb-85.png', 4, 4),
('Rainbow', 'https://is3-ssl.mzstatic.com/image/thumb/Music118/v4/7f/21/2a/7f212aa6-68ea-3925-a391-bbe04a2bc673/UMG_cvrart_00602567385714_01_RGB72_3000x3000_18UMGIM03879.jpg/170x170bb-85.png', 4, 4),
('Hard Place', 'https://is2-ssl.mzstatic.com/image/thumb/Music118/v4/69/b7/18/69b71895-e319-639c-074b-41e93797abc3/886447397107.jpg/170x170bb-85.png', 8, 5),
('Better', 'https://is2-ssl.mzstatic.com/image/thumb/Music128/v4/19/e1/2a/19e12a66-bbd7-bd72-e752-c53c39e2b444/886447357385.jpg/170x170bb-85.png', 9, 5),
('Trip', 'https://is2-ssl.mzstatic.com/image/thumb/Music118/v4/d5/74/93/d57493d9-68e3-a71f-718a-820b31a8ef4a/00602577107870.rgb.jpg/170x170bb-85.png', 7, 5);

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
(4, 3),
(4, 10),
(4, 7),
(4, 8),
(5, 7),
(5, 8),
(5, 14),
(5, 6),
(6, 4),
(6, 5),
(6, 2),
(6, 3),
(7, 11),
(7, 12),
(7, 1),
(7, 4),
(8, 14),
(8, 15),
(8, 9),
(8, 12),
(9, 1),
(9, 2),
(9, 3),
(9, 13),
(10, 4),
(10, 6),
(10, 10),
(10, 7);

INSERT INTO comments(song_id, user_id, comment_body) VALUES
(1, 3, 'Great song to dance to'),
(1, 7, 'Been listening non-stop'),
(2, 9, 'so romantic'),
(2, 6, 'it sounds even better live'),
(3, 9, 'sweet sound'),
(3, 6, 'that voice... I love it'),
(4, 10, 'love this song'),
(4, 7, 'my jam'),
(5, 1, 'suprisingly good'),
(5, 8, 'not bad'),
(6, 1, 'I dig it'),
(6, 10, 'wow, this is awesome'),
(7, 4, 'my go-to workout song'),
(7, 5, 'matches my mood today'),
(8, 5, 'straight to my favorites'),
(8, 4, 'might be his best song so far'),
(9, 2, 'I appreciate this song'),
(9, 3, 'a little aggressive, but decent nonetheless'),
(10, 10, 'not usually into country, but this is great'),
(10, 7, 'Beautiful song'),
(11, 4, 'I hope you all are enjoying this one'),
(11, 3, 'This song is so colorful, just like its name'),
(12, 2, 'the music is cool'),
(12, 6, 'not sure how I ended up here, but i like this'),
(13, 2, 'a nice little mood booster'),
(13, 9, 'groovy'),
(14, 5, 'the beginning is so dramatic - I love it'),
(14, 8, 'so emotional'),
(15, 8, 'so fun'),
(15, 1, 'very catchy');
