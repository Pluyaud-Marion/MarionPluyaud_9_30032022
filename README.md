# Billed

P9 - Débuggez et testez un SaaS RH

Ce repo a été réalisé dans le cadre d'un projet pour la formation DA JavaScript React - Openclassrooms 

- Backend de l'application fourni par l'entreprise : https://github.com/OpenClassrooms-Student-Center/Billed-app-FR-back
- Frontend de l'application fourni par l'entreprise : https://github.com/OpenClassrooms-Student-Center/Billed-app-FR-Front

Travail réalisé : 
- Debug de l'application
- Rélisation de tests unitaires et tests d'intégration
- Amélioration du rapport de couverture (>80% attendu sur Bills.js et NewBill.js) ([Rapport de couverture](https://user-images.githubusercontent.com/80038185/163198218-c89785db-f0e9-46cb-81a6-4bba51076d60.png)
)
- Rédaction de tests End-to-End pour le parcours Employé

Détail des missions demandées par l'entreprise : [Kanban](https://www.notion.so/a7a612fc166747e78d95aa38106a55ec?v=2a8d3553379c4366b6f66490ab8f0b90)

Technologies utilisées :
- Jest
- DOM Testing Library

Lancement du projet : 
  ### Lancer l'API:
  ```
cd Billed-app-FR-Back && npm install && npm run run:dev
  ```

  ### Lancer l'application
```
cd Billed-app-FR-Front && npm install && live-server
```
(Si le navigateur ne s'ouvre pas : http://127.0.0.1:8080/)


 ### Comptes et utilisateurs : 

  - administrateur : 
```
utilisateur : admin@test.tld 
mot de passe : admin
```
  - employé :
```
utilisateur : employee@test.tld
mot de passe : employee
```
 ### Lancer un test :
 Installer jest-cli
 ```
 npm i -g jest-cli
 jest src/__tests__/your_test_file.js
 ```
 ### Lancer plusieurs tests :
 ```
 npm run test
 ```
 ### Voir la couverture de test : 
 ```
 http://127.0.0.1:8080/coverage/lcov-report/
 ```

  
