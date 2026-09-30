import { test } from 'node:test';
import assert from 'node:assert/strict';
import { formaterLigne } from '../src/format.js';

test('formaterLigne', () => {
  assert.strictEqual(
    formaterLigne({ ref: 'A1', nom: 'Vis', quantite: 3, seuil: 5 }),
    'A1 — Vis : 3 u ⚠'
  );
  assert.strictEqual(
    formaterLigne({ ref: 'A1', nom: 'Vis', quantite: 10, seuil: 5 }),
    'A1 — Vis : 10 u'
  );
  assert.strictEqual(
    formaterLigne({ ref: 'A1', nom: 'Vis', quantite: 3, seuil: 5, unite: 'kg' }),
    'A1 — Vis : 3 kg ⚠'
  );
});
