# Any-Countries

graphql fullstack with all good things.

created by mazdak nazemi.

at first please kindly consider that author has ability to develop in higher quality than this
handling errors better in front and back , testing , usage of plain css , sql first approach , context Api , different pacakges and other tech such as nginx , log technics and ...

Development is infinite loop and at each step we can add more and more and many businesses can be add to this source in future because of strong structure we have . thank you for time and consideration . glad to hear from you .

- please consider fixer.io doesn't provide reuqested functionality anymore for free-tier accounts , I also checked provided key and my registered key . the response pic is in docs folder but whole functionality implemented on backend and if we put correct api_key it will work .

#

this code base consider to implement code and structures with persistance on future usablitiy

all folders and components naming convension and implementation are base of many best practices in open source world of course it seems over delivary but for our business sturcture is so important and ...

#

### Folder structure :

- #### app

  this is nextjs ssr application with usage of redux graphql tailwind css . at first started with usage of whole graphql stacks in front and encountered with some bugs and that need to handle therefore I continue with redux as source of truth . inside that there are normal flow of
  react base applications .
  every business and component groups clearly seprated that let this project expandable and reusable for future.

- #### api

  nodejs hybrid api with graphql and rest , authentication handle with rest base of request in mail that we need seprate route for /login , fetching countries data handled with graphql rest .
  a good package with built in cache .
  in api there are very specific sepration of concern . every business and logic has own folder that
  let us to use it in another project . many business can delegate to a npm package and let us have thiner application . clean architecture and ...

- #### k8s

  will contain all good things for kubernetes , because of some unrelated problems (my location :))
  we need add more things for real world .

- #### Docker-compose

  will contain all good things for wrap up code base with docker stack tech.

- #### docs

  will contain description about project how and what fors ...

- #### .github

  ci/cd with github actions .

- #### Makefile
  make development easier and let other developer start project easily out of box .

---

### BOOTSTRAP PROJECT :

in root open you terminal

```
  make postgres

  make createdb

  make migrateUser

  make migrateUp

```

after top steps cd to app and api and install packages

in 2 seprated terminal in app and api

```
  npm run dev
```

fix ormconfig.json path of entities and ...

project bootstraped for development and for production need its own flow .

Glad to hear from you !

kind regards .

---

ps : app deployed on anyfin.ir , asap api will deploy . because of some local problems :) as I think you know . with node pm2 not other big guys .
