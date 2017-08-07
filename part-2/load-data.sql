COPY grocery_items (name,price,section) FROM '/Users/zubairahmed/projects/phase-3-challenge/part-2/grocery.csv' DELIMITER ',' CSV HEADER;

INSERT INTO shoppers (name)
VALUES ('Punit'), ('Jason'), ('Samira'), ('Thunder'), ('BoyManBear');

INSERT INTO orders (id, item_id, shopper_id)
VALUES
  (1, 2, 3),
  (1, 3, 3),
  (1, 4, 3),
  (2, 1, 3),
  (2, 2, 3),
  (3, 6, 4),
  (4, 10, 1),
  (5, 9, 5),
  (5, 17, 5);
