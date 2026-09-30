import { Stock } from './stock.js';
import { formaterTableau } from './format.js';
import { chargerExemple } from './outils.js';
import { versCsv } from './export.js';

const stock = chargerExemple(new Stock());

console.log("Bienvenue dans StockLite !");

const commande = process.argv[2] ?? 'lister';

switch (commande) {
  case 'lister':
    console.log(formaterTableau(stock.lister()));
    break;
  case 'export':
    console.log(versCsv(stock));
    break;
  case 'alertes':
    console.log(formaterTableau(stock.alertes()) || 'Aucune alerte');
    break;
  default:
    console.error(`Commande inconnue : ${commande}`);
    process.exitCode = 1;
}
