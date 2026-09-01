# SQL Queries

How many emails have multiple services?
```sql
SELECT count as services, COUNT(*) FROM (SELECT hash, count(*) as count  FROM email_badges GROUP BY hash) AS t GROUP BY count;
```

How many unique emails?
```sql
SELECT COUNT(*) FROM (SELECT hash, count(*) as count  FROM email_badges GROUP BY hash) AS t;
```

How many emails per service?
```sql
SELECT badge, count(*) as email FROM email_badges GROUP by badge;
```

(only local)
Email list with certain amount of services
```
SELECT email, count(*) as services FROM email_badges LEFT JOIN email ON email.hash=email_badges.hash GROUP BY email HAVING services = 9;
```

CSV Export
```
SELECT email, count(*) as services FROM email_badges LEFT JOIN email ON email.hash=email_badges.hash GROUP BY email HAVING services = 9 INTO OUTFILE '/tmp/9.csv' FIELDS TERMINATED BY ',' OPTIONALLY ENCLOSED BY '"' LINES TERMINATED BY '\n';
```

SELECT email, count(*) as services FROM email_badges LEFT JOIN email ON email.hash=email_badges.hash GROUP BY email HAVING services = 8 INTO OUTFILE '/tmp/8.csv' FIELDS TERMINATED BY ',' OPTIONALLY ENCLOSED BY '"' LINES TERMINATED BY '\n';

SELECT email, count(*) as services FROM email_badges LEFT JOIN email ON email.hash=email_badges.hash GROUP BY email HAVING services = 7 INTO OUTFILE '/tmp/7.csv' FIELDS TERMINATED BY ',' OPTIONALLY ENCLOSED BY '"' LINES TERMINATED BY '\n';

SELECT email, count(*) as services FROM email_badges LEFT JOIN email ON email.hash=email_badges.hash GROUP BY email HAVING services = 6 INTO OUTFILE '/tmp/6.csv' FIELDS TERMINATED BY ',' OPTIONALLY ENCLOSED BY '"' LINES TERMINATED BY '\n';

SELECT email, count(*) as services FROM email_badges LEFT JOIN email ON email.hash=email_badges.hash GROUP BY email HAVING services = 5 INTO OUTFILE '/tmp/5.csv' FIELDS TERMINATED BY ',' OPTIONALLY ENCLOSED BY '"' LINES TERMINATED BY '\n';

SELECT email, count(*) as services FROM email_badges LEFT JOIN email ON email.hash=email_badges.hash GROUP BY email HAVING services = 4 INTO OUTFILE '/tmp/4.csv' FIELDS TERMINATED BY ',' OPTIONALLY ENCLOSED BY '"' LINES TERMINATED BY '\n';

SELECT email, count(*) as services FROM email_badges LEFT JOIN email ON email.hash=email_badges.hash GROUP BY email HAVING services = 3 INTO OUTFILE '/tmp/3.csv' FIELDS TERMINATED BY ',' OPTIONALLY ENCLOSED BY '"' LINES TERMINATED BY '\n';

SELECT email, count(*) as services FROM email_badges LEFT JOIN email ON email.hash=email_badges.hash GROUP BY email HAVING services = 2 INTO OUTFILE '/tmp/2.csv' FIELDS TERMINATED BY ',' OPTIONALLY ENCLOSED BY '"' LINES TERMINATED BY '\n';

SELECT email, count(*) as services FROM email_badges LEFT JOIN email ON email.hash=email_badges.hash GROUP BY email HAVING services = 1 INTO OUTFILE '/tmp/1.csv' FIELDS TERMINATED BY ',' OPTIONALLY ENCLOSED BY '"' LINES TERMINATED BY '\n';


```
SELECT email, badge as service FROM email_badges LEFT join email ON email.hash=email_badges.hash WHERE badge = "trophy_blue_beitragsblocker"
```

```
SELECT email, badge as service FROM email_badges LEFT join email ON email.hash=email_badges.hash WHERE badge = "trophy_blue_beitragsblocker" INTO OUTFILE '/tmp/trophy_blue_beitragsblocker.csv' FIELDS TERMINATED BY ',' OPTIONALLY ENCLOSED BY '"' LINES TERMINATED BY '\n';

```

SELECT email, badge as service FROM email_badges LEFT join email ON email.hash=email_badges.hash WHERE badge = "trophy_blue_beitragsblocker" INTO OUTFILE '/tmp/trophy_blue_beitragsblocker.csv' FIELDS TERMINATED BY ',' OPTIONALLY ENCLOSED BY '"' LINES TERMINATED BY '\n';

SELECT email, badge as service FROM email_badges LEFT join email ON email.hash=email_badges.hash WHERE badge = "trophy_blue_liberationexpress" INTO OUTFILE '/tmp/trophy_blue_liberationexpress.csv' FIELDS TERMINATED BY ',' OPTIONALLY ENCLOSED BY '"' LINES TERMINATED BY '\n';

SELECT email, badge as service FROM email_badges LEFT join email ON email.hash=email_badges.hash WHERE badge = "trophy_blue_masernimpfblocker" INTO OUTFILE '/tmp/trophy_blue_masernimpfblocker.csv' FIELDS TERMINATED BY ',' OPTIONALLY ENCLOSED BY '"' LINES TERMINATED BY '\n';

SELECT email, badge as service FROM email_badges LEFT join email ON email.hash=email_badges.hash WHERE badge = "trophy_blue_maskenfreiexpress" INTO OUTFILE '/tmp/trophy_blue_maskenfreiexpress.csv' FIELDS TERMINATED BY ',' OPTIONALLY ENCLOSED BY '"' LINES TERMINATED BY '\n';

SELECT email, badge as service FROM email_badges LEFT join email ON email.hash=email_badges.hash WHERE badge = "trophy_blue_nachweisexpress" INTO OUTFILE '/tmp/trophy_blue_nachweisexpress.csv' FIELDS TERMINATED BY ',' OPTIONALLY ENCLOSED BY '"' LINES TERMINATED BY '\n';

SELECT email, badge as service FROM email_badges LEFT join email ON email.hash=email_badges.hash WHERE badge = "trophy_blue_rundfunkalarm" INTO OUTFILE '/tmp/trophy_blue_rundfunkalarm.csv' FIELDS TERMINATED BY ',' OPTIONALLY ENCLOSED BY '"' LINES TERMINATED BY '\n';

SELECT email, badge as service FROM email_badges LEFT join email ON email.hash=email_badges.hash WHERE badge = "trophy_blue_testexpress" INTO OUTFILE '/tmp/trophy_blue_testexpress.csv' FIELDS TERMINATED BY ',' OPTIONALLY ENCLOSED BY '"' LINES TERMINATED BY '\n';

SELECT email, badge as service FROM email_badges LEFT join email ON email.hash=email_badges.hash WHERE badge = "trophy_blue_beitragsstopper" INTO OUTFILE '/tmp/trophy_blue_beitragsstopper.csv' FIELDS TERMINATED BY ',' OPTIONALLY ENCLOSED BY '"' LINES TERMINATED BY '\n';

SELECT email, badge as service FROM email_badges LEFT join email ON email.hash=email_badges.hash WHERE badge = "trophy_orange_freunde_der_demokratie" INTO OUTFILE '/tmp/trophy_orange_freunde_der_demokratie.csv' FIELDS TERMINATED BY ',' OPTIONALLY ENCLOSED BY '"' LINES TERMINATED BY '\n';

SELECT email, badge as service FROM email_badges LEFT join email ON email.hash=email_badges.hash WHERE badge = "trophy_orange_restart_democracy" INTO OUTFILE '/tmp/trophy_orange_restart_democracy.csv' FIELDS TERMINATED BY ',' OPTIONALLY ENCLOSED BY '"' LINES TERMINATED BY '\n';

SELECT email, badge as service FROM email_badges LEFT join email ON email.hash=email_badges.hash WHERE badge = "trophy_blue_interested" INTO OUTFILE '/tmp/trophy_blue_interested.csv' FIELDS TERMINATED BY ',' OPTIONALLY ENCLOSED BY '"' LINES TERMINATED BY '\n';

SELECT email, badge as service FROM email_badges LEFT join email ON email.hash=email_badges.hash WHERE badge = "trophy_blue_tested" INTO OUTFILE '/tmp/trophy_blue_tested.csv' FIELDS TERMINATED BY ',' OPTIONALLY ENCLOSED BY '"' LINES TERMINATED BY '\n';










