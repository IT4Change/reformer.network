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