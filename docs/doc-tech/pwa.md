---
id: pwa
title: Progressive Web App
sidebar_label: Progressive Web App
slug: /pwa
---

## Introduction

Les progressive web apps utilisent les dernières technologies pour combiner les
meilleures applications Web et mobiles. Pensez-y comme un site Web construit à l'aide
de technologies Web, mais qui agit et se sent comme une application.

## Service Worker

Un service worker va souvent prendre la forme d’un petit fichier JavaScript et jouer le
rôle de proxy entre votre application, le réseau et le navigateur. C’est un peu le chef
d’orchestre de la synchronisation des données entre ces trois éléments. Aujourd’hui, en
2018, son développement est quasi-uniquement concentré sur le mobile. En effet, c’est
sur mobile que l’on va retrouver des connexions à vitesse variable et surtout des
déconnexions intempestives.

![img](/img/PWAServiceWorker.png)

# Utilisation du Service Worker

## Installation

1. Placez vous à la racine de votre application
2. Installer le composant PWA
    - “ng add @angular/pwa”
3. Vérifier son installation
    - Un fichier à la racine nommé ngsw-config.json a du apparaître
    - Dans le package.json, la dépendance
    - "@angular/service-worker": "[version]" a dû apparaître
4. Désormais, il faut build l’application avec
    - “ng build --prod”
5. Exécutez la commande
    - “http-server -p 8080 -c-1 .\dist\angular-oav\”
    - Si ça ne fonctionne pas, installez http-server avec “npm i http-server”
6. Connectez vous à votre application sur un navigateur via le lien
    - “http://127.0.0.1:8080”

## Fonctionnement

Tout se déroule dans le fichier ngsw-config.json.
A l’intérieur, une trace déjà écrite est disponible. Grâce à ces informations, le Service
Worker va garder en cache le code important à l’application en cache pour qu’à la 1ère
utilisation, si internet est coupé, l’application continuera de fonctionner (sans les
requêtes serveur).
Plus d’informations via le site officiel.
L’option “dataGroups” est ajoutée à la main. Son but va être de garder en cache toutes
les requêtes http (get) qui seront effectuées afin de retranscrire les réponses. Grâce à
ça, si à votre connexion sur l’application, vous faites la requête /test, si internet coupe,
vous pourrez la refaire, même sans internet.
Les informations stockées dans ce module ne sont qu’une sécurité supplémentaire
dans le fonctionnement de cette application, elles seront gardées en mémoire pour une
durée de 7 jours.

# IndexedDB

## Utilité

Dans cette application, les données seront stockées dans l’IndexedDB qui est une base
de données front. Le but sera d’utiliser toutes les données du programme sans
connexion internet.

## Utilisation

Pour se faire, on utilisera le module “LocalForage” qui est le plus simple d’utilisation et
le plus logique.
Pour se faire, un service localforage a été créé dans l’application. Celui-ci regroupe
toutes les actions à faire pour traiter les données en front.
L’indexedDB s’utilise en 2 données différentes :
- Keys (string)
- Value (any)
On stockera donc un id en string dans Keys et les données dans Value.
Tout ce qui va être expliqué plus bas peut être retrouvé ici différemment.


#### Creation BDD

Tout d’abord, la création de la bdd s’initialise dans le constructeur : 

![img](/img/localforage1.png)

#### Utilisation BDD

L’utilisation de localforage va demander une petite spécificité.

En effet, de base on utilisera directement localforage.[requête](key,value). Avec cette
utilisation, on entrera les données directement dans OAV_DB et non dans une table
précise. Il faut donc cibler une table directement avec :

![img](/img/localforage3.png)

Afin de palier à ce problème, une fonction a été créé pour cibler automatique la bonne
table :
Il suffit donc, avant chaque utilisation, de créer une variable appelant cette fonction avec
le nom de la table correspondante.
Exemple :
Et l’utiliser ensuite de la manière suivante (exemple) :

#### Creation table et donnée

La requête “setItem” est utilisé avec la fonction :

setItem(key, value)
Dans key, on insère son id en string, dans value notre donnée.
Insérer une donnée dans une table va directement créer cette dernière.
Pour se faire, une fonction a été créé afin de directement faire le bon traitement :

![img](/img/localforage2.png)

Il suffira donc d’appeler la fonction “set” du service localforage en lui envoyant l’id, les
données et la table dans laquelle enregistré (en string aussi) afin de créer/modifier la
table en question.

#### Recuperer une donnée

Maintenant que vous avez vu comment créer une table et une donnée, vous comprenez
le principe du localforage et d’indexedDB. Le reste est assez similaire.
Récupérer des données dans l’indexedDB utilise plusieurs techniques :
getItem(key)
→ pour récupérer une donnée via son id
key(keyIndex)
→ pour récupérer un id via sa numérotation de rangement
keys()
→ pour récupérer tout les id de la table
iterate()
→ pour récupérer tout les id et données de la table
Exemple d’utilisation

#### Supprimer des données

Maintenant que vous avez vu comment créer une table et une donnée, vous comprenez
le principe du localforage et d’indexedDB. Le reste est assez similaire.
Récupérer des données dans l’indexedDB utilise plusieurs techniques :
getItem(key)
→ pour récupérer une donnée via son id
key(keyIndex)
→ pour récupérer un id via sa numérotation de rangement
keys()
→ pour récupérer tout les id de la table
iterate()
→ pour récupérer tout les id et données de la table
Exemple d’utilisation

![img](/img/localforage4.png)

#### Utilisation API ou LocalForage

Afin de déterminer quel appel devra effectuer le front, une vérification de la connexion
internet est effectué :
> if(navigator.onLine)
navigator.onLine renvoie un boolean. Si true, alors l’utilisateur a internet et inversement.
Par la suite, le traitement est simple :
Si internet, alors appel API.
Sinon, appel localforage.
Vous avez dû remarquer l’apparition de “from” devant l’appel du localforage. En effet,
toutes les fonctions du localforage sont des Promises alors que l’API ne renvoie que
des Observable. From permet de transformer ces promises en observable.
L’intérêt de ces utilisations est que le code de l’application n’a pas à être modifié pour
accueillir le localforage. C’est ce dernier qui s’adapte à l’application.

## Synchronisation

Pour récupérer toutes ses données dans le front, il suffit de tout enregistrer un par un.
Pour se faire, vous avez du apercevoir un bouton “Synchroniser” dans le front. Ce
bouton n’est disponible que si vous avez accès à internet (par sécurité).
Au clic, un traitement va s'exécuter :
(Afin d’éviter un trop gros copier coller, je vous renvoie à la page sync.component.ts)

Ce traitement va tout simplement appeler TOUTES les requêtes http de l’API et les
enregistrer dans l’indexedDB les unes après les autres.
Exemple d’utilisation

