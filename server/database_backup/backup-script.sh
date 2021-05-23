FILE='/tmp/delicous_dishes_backup.sql'
DEST='/home/pi/delicious_dishes/server/database_backup/database_backup.sql'

PGPASSWORD='postgres' pg_dump -U postgres -h localhost delicious_dishes > $FILE

mv $FILE $DEST
