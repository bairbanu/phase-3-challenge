COPY grocery_items (name,price,section) FROM '/Users/zubairahmed/projects/phase-3-challenge/part-2/grocery.csv' DELIMITER ',' CSV HEADER;

INSERT INTO shoppers (name)
VALUES ('Punit'), ('Jason'), ('Samira'), ('Thunder'), ('BoyManBear');

INSERT INTO orders (item_id, shopper_id)
VALUES (2, 3), (3, 3), (4, 3), (1, 2), (2, 2), (6, 4);
