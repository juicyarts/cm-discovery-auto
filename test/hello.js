import test from 'node:test';

import { strict as assert } from 'node:assert';
import { Hello } from '../src/hello';

test('Hello', () => {
  assert.strictEqual(Hello('World'), 'Hello World');
});
