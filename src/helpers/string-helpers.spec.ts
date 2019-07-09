/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { capitalize } from './string-helpers';

it('capitalizes single word', () => expect('Asd').toEqual(capitalize('asd')));
it('capitalizes multiple words', () => expect('Asd qwe').toEqual(capitalize('asd qwe')));
