import { test } from 'node:test';
import assert from 'node:assert/strict';
import { Stock } from '../src/stock.js';

test('ajouter puis obtenir', () => {
  const s = new Stock();
  s.ajouter('A1', 'Vis', 10, 2);
  assert.equal(s.obtenir('A1').quantite, 10);
  assert.equal(s.obtenir('ZZ'), null);
});

test('retirer diminue la quantité', () => {
  const s = new Stock();
  s.ajouter('A1', 'Vis', 10, 2);
  s.retirer('A1', 4);
  assert.equal(s.obtenir('A1').quantite, 6);
});

test('retirer refuse un stock insuffisant ou un produit inconnu', () => {
  const s = new Stock();
  s.ajouter('A1', 'Vis', 1);
  assert.throws(() => s.retirer('A1', 5), /insuffisant/);
  assert.throws(() => s.retirer('B2', 1), /inconnu/);
});

test('ajouter refuse une quantité invalide', () => {
  assert.throws(() => new Stock().ajouter('A1', 'Vis', -3), /invalide/);
});

test('un produit dont la quantité égal le seuil est en alerte', () => {
  const stock = new Stock();
  stock.ajouter('X1', 'Test', 5, 5);
  assert.ok(stock.alertes().some((p) => p.ref === 'X1'));
});