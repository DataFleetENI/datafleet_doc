---
id: api-user-reset-password
title: API Renouveler son mot de passe
sidebar_label: API Renouveler son mot de passe
slug: /api-user-reset-password
---

## Introduction

L'api permet à un utilisateur de signifier qu'il a oublié son mot de passe. Un mot de passe temporaire lui sera envoyé par mail.

Elle prend en paramètre d'entrée les éléments de connexion au format JSON:
1. idEnterprise
1. mail
1. mot de passe temporaire

---

## Mise en place
Pour tester uniquement l'API, il est possible d'utiliser Postman.

Lancer le serveur Symfony.

### Appel de l'API
Renseigner l'adresse de l'API : https://127.0.0.1:8000/user/resetPassword

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
```typescript
{
    "success": true
}
```

L'utilisateur reçoit le mail suivant :
![img](/img/mail_reset_password.png)

#### Echec
```typescript
{
    "success": false
}
```
