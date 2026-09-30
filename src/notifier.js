// Corps d'un e-mail d'alerte à partir de la liste des alertes
export function corpsEmail(alertes) {
  if (alertes.length === 0) return 'Aucune alerte de stock.';
  const lignes = alertes.map((p) => `- ${p.ref} ${p.nom} : ${p.quantite} (seuil ${p.seuil})${p.critique ? ' — RUPTURE' : ''}`);
  return ['Produits à réapprovisionner :', ...lignes].join('\n');
}
