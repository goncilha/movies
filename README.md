# Movies

### Instalation
Run ```docker-compose up -d```

### Endpoints
**GET** http://localhost/movies
**Parameters** filter (SEM_CENSURA|CENSURADO)
**Content-Type:** application/json
**Result**
```
[
    {
        "actors": [
            "Robert De Niro",
            "Marlon Brando",
            "Andy Garcia",
            "Al Pacino"
        ],
        "_id": "5f0901985b88a3006b6c2899",
        "name": "O Poderoso Chefão",
        "releaseDate": "2010-11-19T00:00:00.000Z",
        "censorshipLevel": "CENSURADO",
        "direction": "Francis Ford Coppola",
        "__v": 0
    }
]
```
**POST** http://localhost/movies
**Content-Type:** application/json
**Request body**
```
{
    "name": "Harry Potter e as Reliquias da Morte parte 2",
    "releaseDate": "2010-11-19",
    "censorshipLevel": "SEM_CENSURA",
    "direction": "David Yates",
    "actors": [
        "Daniel Radcliffe",
        "Emma Watson",
        "Rupert Grint",
        "Alan Rickman"
    ]
}
```

### Tests
Run ```yarn test```