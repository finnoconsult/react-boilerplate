import * as funcs from './string-helpers';

it('should capitalize single word', (): string => expect('Asd').toEqual(funcs.capitalize('asd')));
it('should capitalize multiple word string', (): string => expect('Asd qwe').toEqual(funcs.capitalize('asd qwe')));
