---
id: api-user-update-password
title: API Mettre à jour un mot de passe
sidebar_label: API Mettre à jour un mot de passe
slug: /api-user-update-password
---

## Introduction

L'api de mise à jour de mot de passe permet à un utilisateur connecté de changer son mot de passe.

Elle prend en paramètre d'entrée les éléments de connexion au format JSON:
1. idEnterprise
1. mail
1. nouveau mot de passe

---

## Mise en place
Pour tester uniquement l'API, il est possible d'utiliser Postman.

Lancer le serveur Symfony.

### Appel de l'API
Renseigner l'adresse de l'API : https://127.0.0.1:8000/user/updatePassword

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
#### Echec
```typescript
{
    "success": false
}
```
