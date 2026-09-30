// Export CSV (séparateur « ; »)
export function versCsv(stock) {
  const lignes = stock.lister().map((p) => [p.ref, p.nom, p.quantite, p.seuil].join(';'));
  return ['ref;nom;quantite;seuil', ...lignes].join('\n');
}
