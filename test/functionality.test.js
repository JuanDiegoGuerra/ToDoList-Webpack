import { JSDOM, } from 'jsdom';
import { addmylist, deletemylist, completedmylist, clearcompletedmylist, editmylist, } from './functionallityTest.js';
  
  const dom = new JSDOM('<!doctype html><html><body></body></html>');
  global.window = dom.window;
  global.document = window.document;

  const localStorageMock = (() => {
    let store = {};
  
    return {
      store,
      getItem: (key) => store[key] || [],
      setItem: (key, value) => {
        store[key] = JSON.stringify(value);
      },
      removeItem: (key) => {
        delete store[key];
      },
      clear: () => {
        store = {};
      },
    };
  })();
  
  global.localStorage = localStorageMock;

describe('addmylist', () => {
  it('Adding a new object "todo" and save it in Local Storage', () => {
    const mockDescription = 'Testing Part 1';
    const expectedList = [
      {
        index: 1,
        description: 'Testing Part 1',
        completed: false,
      },
    ];

    addmylist(mockDescription);
    expect(JSON.parse(localStorage.store.myList)).toStrictEqual(
      expectedList,
    );
  });
});

describe('deletemylist', () => {
  it('Deleting an existing object "todo" from the Local Storage using its index', () => {
    const removeindex = 1;
    const removeList = [
      {
        index: 1,
        description: 'Testing Part 2',
        completed: false,
      },
    ];

    localStorage.setItem('myList', removeList);

    deletemylist(removeindex);
    expect(JSON.parse(localStorage.store.myList)).toStrictEqual('[]');
  });
});
