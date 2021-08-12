---
id: api-user-enregistrement
title: API Enregistrer un utilisateur
sidebar_label: API Enregistrer un utilisateur
slug: /api-user-enregistrement
---

## Introduction

L'api d'enregistrement permet de sauvegarder un utilisateur dans la base de données.

Elle prend en paramètre d'entrée les éléments de connexion au format JSON.

---

## Mise en place
Pour tester uniquement l'API, il est possible d'utiliser Postman.

Lancer le serveur Symfony.

### Appel de l'API
Renseigner l'adresse de l'API : https://127.0.0.1:8000/user/oneUserRegistration

Préciser qu'il s'agt d'une méthode POST afin qu'il puisse prendre en compte les éléments noté dans le body.
```typescript
{
    "mail" : "exemple@email.com",
    "idEnterprise" : "57DG908K",
    "password" : "exemple"
    "lastName": "rabenarison",
    "firstName": "Juliette",
    "functionUser": "developpeur",
    "phoneNumber": "0987654365",
    "isManager": false
}
```

### Retour de l'API
#### Succès
```typescript
{
"registration": true,
"reason": "Registration completed"
}
```

#### Echec, données obligatoires manquantes
```typescript
{
"registration": false,
"reason": "Registration failed. The lastName, firstName, mail and password are required"
}
```

#### Echec, utilisateur déjà existant
```typescript
{
"registration": false,
"reason": "Registration failed. User already existing"
}
```

#### Echec, erreur lors de l'enregistrement
```typescript
{
"registration": false,
"reason": "Registration failed. [message d'erreur de l'exception]"
}
```
