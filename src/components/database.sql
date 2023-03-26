-- CREATE TABLE
CREATE TABLE "gallery"(
"id" serial primary key,
"title" VARCHAR(30) NOT NULL,
"path" VARCHAR(100) NOT NULL,
"description" VARCHAR(100) NOT NULL,
"likes" INTEGER DEFAULT 0
);

-- ADD mock data
INSERT INTO "gallery" ("title", "path", "description")
VALUES('Goat', 'images/goat_small.jpg', 'Photo of a goat taken at Glacier National Park that looks pretty neat.'),
('Bird', 'images/bird.jpeg', 'This is a picture of a bird that looks pretty neat.'),
('Italy', 'images/italy.jpeg', 'This is a picture taken in Italy that looks pretty neat');

-- GET gallery
SELECT * FROM "gallery";

-- PUT galleryItem
UPDATE "gallery" SET "likes" = "likes" + 1 WHERE "id" = 2;

-- POST galleryItem
INSERT INTO "gallery" ("title", "path", "description")
VALUES('Goat', 'images/goat_small.jpg', 'Photo of a goat taken at Glacier National Park that looks pretty neat.')