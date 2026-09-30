// Mise en forme d'une ligne de stock pour l'affichage console
export function formaterLigne(p) {
  const unite = p.unite ?? 'u';
  const alerte = p.quantite <= p.seuil ? ' ⚠' : '';
  return `${p.ref} — ${p.nom} : ${p.quantite} ${unite}${alerte}`;
}

export function formaterTableau(produits) {
  return produits.map(formaterLigne).join('\n');
}
