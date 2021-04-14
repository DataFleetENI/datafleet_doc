---
id: logrocket
title: LogRocket
---

## Introduction

LogRocket fait apparaître les erreurs qui affectent les utilisateurs, tout en vous fournissant une vidéo et des journaux pour chaque rapport de bogues. Visionner la relecture vidéo vous aide à comprendre ce que l'utilisateur a fait pour déclencher un bogue.

Les requêtes réseau, les exceptions JavaScript et les bogues de code sont tous enregistrés et relus dans LogRocket. Comme la vidéo est une reproduction fidèle du DOM (Document Object Model), vous pouvez inspecter le HTML/CSS original pour comprendre et reproduire les bogues d'IU (interface utilisateur).

---

## Screenshot

![img](/img/interface.png)

---

## Fonctionnalitées

Documentation officielle : [Lien avec un titre](https://docs.logrocket.com/docs "Documentation LogRocket")

---

## Mise en place

Tout d'abord, il faut initier le projet.
### Initialisation

```typescript
LogRocket.init('tiouyq/datafleet', {
      dom: {
        textSanitizer: true,
        inputSanitizer: true,
      },
    });
```

Ici, **_'tiouyq/datafleet'_** correspond au nom de projet sur la plateforme.
On lui indique 2 paramètres à l'initialisation, soit :

1. textSanitizer, correspond au floutage des informations texte du DOM. Aucun texte ne sera affiché à l'écran.
1. inputSanitizer, correspond au floutage des informations liées au champs _< input >_ et _< select >_ du DOM. Aucune de ces DATA seront affichées à l'écran.

### Identification
```typescript
LogRocket.identify('willyrineau', {
  name: 'Willy RINEAU',
  email: 'willy.rineau2018@campus-eni.fr',

  // Add your own custom user variables here, ie:
  subscriptionType: 'pro'
});

```

L'identification permet de retrouver les logs d'une personne, pour se faire, il est nécessaire d'y implémenter 2 valeurs au minimum.

1. name, qui correspond à la concaténation du prénom et de nom de l'utilisateur.
1. email, qui correspond à l'email de l'utilisateur, que l'on pourra contacter en cas de problème.
1. subscriptionType, ici, il faudra renseigner quelle role à l'utilisateur au moment du bug. (demandeur ou gestionnaire).


---

## Connexion

Pour se connecter à l'inferface de debug, il est nécessaire d'avoir été ajouté au projet.
Pour se faire, il faut contacter **_Willy RINEAU_**, afin qu'il puisse vous ajouter au projet, et vous mettre les accès.


Vous pourrez ainsi vous connecter via l'interface : [Lien avec un titre](https://app.logrocket.com/login "Login LogRocket")

---

## Interface logiciel possible

1. Airbrake
1. Amplitude
1. AppDynamics
1. Bugsnag
1. Datadog
1. Delighted
1. Doorbell.io
1. Drift
1. Dynatrace
1. Errorception
1. Google Analytics
1. Google Optimize
1. Heap
1. HelpScout
1. Honeybadger
1. Intercom
1. Jira
1. Kibana
1. Medallia
1. Mixpanel
1. New Relic
1. Optimizely
1. PagerDuty
1. Pendo
1. Raygun
1. Rollbar
1. Salesforce
1. Segment
1. Sentry
1. Splunk
1. ServiceNow
1. SolarWinds
1. Sumo Logic
1. TrackJS
1. Trello
1. Wootric
1. Zendesk
