# LernApp

Gruppe6: Jannik Röhm, Jasmin Krewenka,

## Requirements

- Install [Docker & Docker Compose](https://www.docker.com/products/docker-desktop/)

## Installation

You can clone the project using GitHub Desktop or any other tool of choice.
You can also clone manually using `git clone git@github.com:LernAppGruppe6/LernApp.git`

### Start development

To start the mysql database & the server you can use

```
docker compose up -d
```

### Start the backend

Change to the `backend` directory and then

```
flask run
```

## Troubleshooting

1. `docker compose down && docker compose up -d`