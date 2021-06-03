---
id: api-user-enregistrement-multiple
title: API Enregistrer plusieurs utilisateurs
sidebar_label: API Enregistrer plusieurs utilisateurs
slug: /api-user-enregistrement-multiple
---

## Introduction

L'api d'enregistrement permet de sauvegarder plusieurs utilisateurs dans la base de données.

Elle prend en paramètre d'entrée les données à enregistrer au format JSON.

---

## Mise en place
Pour tester uniquement l'API, il est possible d'utiliser Postman.

Lancer le serveur Symfony.

### Appel de l'API
Renseigner l'adresse de l'API : https://127.0.0.1:8000/user/importUserRegistration

Préciser qu'il s'agt d'une méthode POST afin qu'il puisse prendre en compte les éléments noté dans le body.
```typescript
[
    {"lastName": "TEST Envoi mail Import",
        "firstName": "Test 1",
        "mail": "test1@email.com",
        "idEnterprise": "57DG9E8K",
        "functionUser": "developpeur",
        "password": "password",
        "phoneNumber": "0987654365",
        "isManager": false
    },

    {"lastName": "TEST Envoi mail Import",
        "firstName": "Test 2",
        "mail": "test2@email.com",
        "idEnterprise": "UJVD793GDS",
        "functionUser": "architecte",
        "password": "password1",
        "phoneNumber": "0987567890",
        "isManager": true
    }
]
```

### Retour de l'API
```typescript
{
    "registrationFailed": {
        "test1@email.com": "Registration failed. User already existing with this email",
        "test3@email.com": "Registration failed. User already existing with this idEnterprise : UJVD73GDS",
        "test2@email.com": "Registration failed. The lastName, firstName, mail and password are required"
    },
    "registrationCompleted": [
        "test4@email.com"
    ]
}
```

Chaque utilisateur enregistré recevra le mail suivant:
L'utilisateur reçoit le mail suivant :
![img](/img/mail_bienvenue.png)
