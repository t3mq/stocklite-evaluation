// Mise en forme d'une ligne de stock pour l'affichage console
export function formaterLigne(p) {
    return `${p.ref} — ${p.nom} : ${p.quantite} ${p.unite ?? 'u'}`;
}

export function formaterTableau(produits) {
  return produits.map(formaterLigne).join('\n');
}
