# Réponses — chasse au trésor

<!-- Format imposé, une réponse par ligne :
Q01: <réponse>
commande: <commande(s) utilisée(s)>
-->

Q01: 
commande: 

Q02: 
commande: 

Q03: 
commande: 

Q04: 
commande: 

Q05: 
commande: 

Q06: 
commande: 

Q07: 
commande: 

Q08: 
commande: 

Q09: src/utils.js
commande: git log --follow --name-status --oneline depart -- src/outils.js

Q10: 15  Nathan Robin
commande: git shortlog -sn depart

Q11: 2026-03-24
commande: git log -1 --format=%cd --date=short v1.0.0

Q12: feat(cli): bannière de démarrage
commande: git log --grep="This reverts" --oneline depart

Q13: de5637a
commande: git log --merges --oneline --grep="fix/valeur-totale

Q14: 16
commande: git diff --numstat v0.1.0 v1.0.0 -- src/stock.js

Q15: 6d6b920
commande: git log -S "TODO: gérer les quantités négatives" --oneline depart
