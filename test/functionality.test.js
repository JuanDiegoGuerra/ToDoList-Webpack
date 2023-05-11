import { addmylist, deletemylist } from './functionallityTest.js';

const localStorageMock = (() => {
  let store = {};

  return {
    store,
    getItem: ((key) => store[key] || []),
    setItem: ((key, value) => {
      store[key] = JSON.stringify(value);
    }),
    removeItem: ((key) => {
      delete store[key];
    }),
    clear: (() => {
      store = {};
    }),
  };
})();

global.localStorage = localStorageMock;

describe('addmylist', () => {
  it('Adding a new object "todo" and save it in Local Storage', () => {
    const mockDescription  = 'Testing Part 1';
    const expectedList = [
      {
        index: 1,
        description: 'Testing Part 1',
        completed: false,
      },
    ];

    addmylist(mockDescription );
    expect(JSON.parse(localStorage.store['myList'])).toStrictEqual(
      expectedList,
    );
  });
});

