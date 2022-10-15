# LernApp

Gruppe6: Jannik Röhm, Jasmin Krewenka,

## Requirements

- Install [Docker & Docker Compose](https://www.docker.com/products/docker-desktop/)
- Install [MySQL Workbench](https://www.mysql.com/products/workbench/)

## Installation

You can clone the project using GitHub Desktop or any other tool of choice.
You can also clone manually using `git clone git@github.com:LernAppGruppe6/LernApp.git`

### Start development

To start the mysql database & the server you can use

```
docker compose up -d --build
```

Your application is here:

- Backend: http://localhost:8000/
- Frontend: to be done


### Connect to Database

Database server needs to be up & running (see "Start development").
Connect to database from mySQL workbench: 
Install mySQL workbench (see "Requirments: Install MySQL Workbench)
Click on the "+" like you see in the img.
![img.png](img.png)
Fill in the connection name, hostname, port, username and deffault schema like you see in the img.
![img_1.png](img_1.png)
Click on the "store in vault" button like you see in the img.
![img_2.png](img_2.png)
Type "root" for the password.
![img_3.png](img_3.png)
Click on "ok", then click on "test connection".
Then click on "ok". Your database should be connected and look like this!
![img_4.png](img_4.png)


### Start the backend

Change to the `backend` directory and then

```
flask run
```

## Troubleshooting

1. `docker compose down && docker compose up -d`