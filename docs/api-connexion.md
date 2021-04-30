---
id: api-user-connexion
title: API Connexion
sidebar_label: API Connexion
slug: /api-user-connexion
---

## Introduction

L'api de connexion permet à un utilisateur de se connecter à l'application Datafleet.
Elle est appelé par la page de connexion.

Elle prend en paramètre d'entrée les éléments de connexion au format JSON:
1. idEnterprise
1. mail
1. password

---

## Mise en place
Pour tester uniquement l'API, il est possible d'utiliser Postman.

Lancer le serveur Symfony.

### Appel de l'API
Renseigner l'adresse de l'API : https://127.0.0.1:8000/user/connection

Préciser qu'il s'agt d'une méthode POST afin qu'il puisse prendre en compte les éléments noté dans le body.
```typescript
{
    "mail" : "exemple@email.com",
    "idEnterprise" : "",
    "password" : "exemple"
}
```
L'élément mail ou idEntreprise doit être complété.


### Retour de l'API
#### Succès
Récupération de l'utilisateur l'API retourne au format Json les données de l'utilisateur
```typescript
{
    "id": 204,
    "lastName": "Exemple",
    "firstName": "Exemple",
    "mail": "exemple@email.com",
    "idEnterprise": "57DG908K",
    "functionUser": "developpeur",
    "password": "exemple",
    "phoneNumber": "0987654365",
    "isFirstConnection": true,
    "isManager": false,
    "accidents": [],
    "adress": null,
    "managerLoans": [],
    "driverLoans": [],
    "occupants": [],
    "idPreference": null,
    "idDrivingLicence": null
}
```
#### Echec
aucun objet JSON n'est retourné.
