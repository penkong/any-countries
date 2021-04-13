# step 1
postgres:
	docker run --name pg13 -p 5432:5432 -e POSTGRES_USER=root -e POSTGRES_PASSWORD=secret -d postgres
	
# step 2 - dev area
pgadmin:
	docker run --name pgadmin4 -p 80:80 -e 'PGADMIN_DEFAULT_EMAIL=nazemi.works@gmail.com' -e 'PGADMIN_DEFAULT_PASSWORD=secret' --link pg13:pg13 -d dpage/pgadmin4

# step 3
createdb: 
	docker exec -it pg13 createdb --username=root --owner=root anycountries


# step 4 - create migration modules already installed
migrateUser:
	cd api && npm run migrate create table users

# step 5 - migrate up add creation for postgres - typeorm sync disabled
migrateupUser:
	npm run migrateup

# if you need
removedb: 
	docker exec -it pg13 dropdb anycountries

.PHONY: 