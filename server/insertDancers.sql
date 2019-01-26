BEGIN TRANSACTION;

INSERT INTO dancers (id, first_name, last_name, company_name, gender, nationality) VALUES
(DEFAULT, 'Stella', 'Abrera', 'American Ballet Theater', 'F', 'USA'),
(DEFAULT, 'Roberto', 'Bolle', 'American Ballet Theater', 'M', 'ITA'),
(DEFAULT, 'Isabella', 'Boylston', 'American Ballet Theater', 'F', 'USA'),
(DEFAULT, 'Misty', 'Copeland', 'American Ballet Theater', 'F', 'USA'),
(DEFAULT, 'Herman', 'Cornejo', 'American Ballet Theater', 'M', 'ARG'),
(DEFAULT, 'David', 'Hallberg', 'American Ballet Theater', 'M', 'USA'),
(DEFAULT, 'Sarah', 'Lane', 'American Ballet Theater', 'F', 'USA'),
(DEFAULT, 'Alban', 'Lendorf', 'American Ballet Theater', 'M', 'DNK'),
(DEFAULT, 'Gillian', 'Murphy', 'American Ballet Theater', 'F', 'USA'),
(DEFAULT, 'Hee', 'Seo', 'American Ballet Theater', 'F', 'KOR'),
(DEFAULT, 'Christine', 'Shevchenko', 'American Ballet Theater', 'F', 'UKR'),
(DEFAULT, 'Daniil', 'Simkin', 'American Ballet Theater', 'M', 'RUS'),
(DEFAULT, 'Cory', 'Stearns', 'American Ballet Theater', 'M', 'USA'),
(DEFAULT, 'Devon', 'Teuscher', 'American Ballet Theater', 'F', 'USA'),
(DEFAULT, 'James', 'Whiteside', 'American Ballet Theater', 'M', 'USA');

COMMIT;