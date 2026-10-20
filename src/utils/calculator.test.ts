import test from 'node:test';
import assert from 'node:assert/strict';
import {
  validateDemoForm,
  calculateCounterValue,
  formatStat,
  calculateCardTilt,
} from './calculator.ts';

test('validateDemoForm rejects empty email', () => {
  const result = validateDemoForm({ workEmail: '' });
  assert.equal(result.isValid, false);
  assert.equal(result.errors.workEmail, 'Work email is required');
});

test('validateDemoForm rejects invalid email formats', () => {
  const result = validateDemoForm({ workEmail: 'notanemail' });
  assert.equal(result.isValid, false);
  assert.ok(result.errors.workEmail.includes('valid work email'));
});

test('validateDemoForm accepts valid work email', () => {
  const result = validateDemoForm({ workEmail: 'alex@company.io' });
  assert.equal(result.isValid, true);
  assert.equal(Object.keys(result.errors).length, 0);
});

test('calculateCounterValue interpolates from start to end accurately', () => {
  const atZero = calculateCounterValue(0, 82, 0);
  assert.equal(atZero, 0);

  const atFull = calculateCounterValue(0, 82, 1);
  assert.equal(atFull, 82);

  const mid = calculateCounterValue(0, 10, 0.5);
  assert.ok(mid > 5 && mid <= 10);
});

test('formatStat formats with prefixes and suffixes properly', () => {
  assert.equal(formatStat(82, '%'), '82%');
  assert.equal(formatStat(10, 'x'), '10x');
  assert.equal(formatStat(50, '+', '> '), '> 50+');
});

test('calculateCardTilt clamps within max angle boundaries', () => {
  const center = calculateCardTilt(0, 0, 15);
  assert.equal(center.rotateX, -0);
  assert.equal(center.rotateY, 0);

  const rightBottom = calculateCardTilt(1, 1, 15);
  assert.equal(rightBottom.rotateY, 15);
  assert.equal(rightBottom.rotateX, -15);

  const extreme = calculateCardTilt(5, -5, 12);
  assert.equal(extreme.rotateY, 12);
  assert.equal(extreme.rotateX, 12);
});
