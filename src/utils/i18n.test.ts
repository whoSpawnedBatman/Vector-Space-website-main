import test from 'node:test';
import assert from 'node:assert/strict';
import {
  translations,
  getTranslations,
  SUPPORTED_LANGUAGES,
  getLanguageOption,
} from './i18n.ts';
import type { Language } from './i18n.ts';

test('i18n supports both English (en) and Spanish (es)', () => {
  assert.equal(SUPPORTED_LANGUAGES.length, 2);
  const codes = SUPPORTED_LANGUAGES.map((l) => l.code);
  assert.ok(codes.includes('en'));
  assert.ok(codes.includes('es'));
});

test('getTranslations returns English translation keys correctly', () => {
  const t = getTranslations('en');
  assert.equal(t.navbar.menu, 'MENU');
  assert.equal(t.hero.title, 'Practical technology solutions today. Ambitious questions for tomorrow.');
  assert.equal(t.hero.seeInAction, 'EXPLORE SOLUTIONS');
  assert.equal(t.hero.requestDemo, 'SCHEDULE CONSULTATION');
});

test('getTranslations returns Spanish translation keys correctly', () => {
  const t = getTranslations('es');
  assert.equal(t.navbar.menu, 'MENÚ');
  assert.equal(t.hero.title, 'Soluciones tecnológicas prácticas hoy. Preguntas ambiciosas para el mañana.');
  assert.equal(t.hero.seeInAction, 'EXPLORAR SOLUCIONES');
  assert.equal(t.hero.requestDemo, 'AGENDAR CONSULTA');
  assert.equal(t.navbar.spanish, 'Español');
});

test('getTranslations falls back to English when unknown language passed', () => {
  const t = getTranslations('fr' as Language);
  assert.equal(t.hero.title, 'Practical technology solutions today. Ambitious questions for tomorrow.');
});

test('getLanguageOption returns expected metadata for en and es', () => {
  const enOpt = getLanguageOption('en');
  assert.equal(enOpt.shortLabel, 'EN');
  assert.equal(enOpt.nativeLabel, 'English');

  const esOpt = getLanguageOption('es');
  assert.equal(esOpt.shortLabel, 'ES');
  assert.equal(esOpt.nativeLabel, 'Español');
});

test('all required translation sections exist in both languages', () => {
  const sections = [
    'navbar',
    'hero',
    'stats',
    'whatDoes',
    'whoFor',
    'stories',
    'compliance',
    'faq',
    'getStarted',
    'footer',
    'modals',
  ] as const;

  for (const lang of ['en', 'es'] as const) {
    const dict = translations[lang];
    for (const section of sections) {
      assert.ok(dict[section], `Section ${section} missing in language ${lang}`);
    }
  }
});
