import { will } from 'willy';
import app from '../src';

describe('sanity', () => {
  it('should exist', () => {
    will('it').be(true);
  });
});
