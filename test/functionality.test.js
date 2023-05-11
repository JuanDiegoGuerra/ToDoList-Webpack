import { JSDOM } from 'jsdom';
import {
  addmylist,
  deletemylist,
  completedmylist,
  clearcompletedmylist,
  editmylist,
} from './functionallityTest.js';

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
  it('Adding a new object of tasks and save it in Local Storage', () => {
    const mockDescription = 'Testing Part 1';
    const expectedList = [
      {
        index: 1,
        description: 'Testing Part 1',
        completed: false,
      },
    ];

    addmylist(mockDescription);
    expect(JSON.parse(localStorage.store.myList)).toStrictEqual(expectedList);
  });
});

describe('deletemylist', () => {
  it('Deleting an existing object task from the Local Storage using its index', () => {
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

describe('editmylist', () => {
  beforeEach(() => {
    document.body.innerHTML = `
        <textarea id='text-area-1'></textarea>
        <textarea id='text-area-2'></textarea>
      `;
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  it('allows one to update the description of the task at a particular index', () => {
    const deleteContents = [
      {
        id: 1,
        desc: 'EDIT TASK',
        completed: false,
      },
    ];

    localStorage.setItem('myList', deleteContents);

    editmylist(1);
  });
});

describe('Operations on Completed tasks', () => {
  describe('completedmylist', () => {
    it('should toggle completed attribute of a task in the localStorage', () => {
      const toggleId = 1;
      const toggleList = [
        {
          id: 1,
          desc: 'Testing Part 1',
          completed: false,
        },
      ];
      const localExpected = [
        {
          id: 1,
          desc: 'Testing Part 1',
          completed: true,
        },
      ];

      localStorage.setItem('myList', toggleList);

      completedmylist(toggleId);
      expect(JSON.parse(localStorage.store.myList)).toStrictEqual(
        localExpected,
      );
    });
  });

  describe('removeCompleted task', () => {
    it('removes all the tasks marked as completed', () => {
      const deleteContents = [
        {
          id: 1,
          desc: 'Testing Part 1',
          completed: false,
        },
        {
          id: 2,
          desc: 'Testing Part 2',
          completed: true,
        },
      ];
      const localExpected = [
        {
          id: 1,
          desc: 'Testing Part 1',
          completed: false,
        },
      ];

      localStorage.setItem('myList', deleteContents);

      clearcompletedmylist(deleteContents);
      expect(JSON.parse(localStorage.store.myList)).toStrictEqual(
        localExpected,
      );
    });
    it('should not remove the task not marked as completed', () => {
      const deleteContents = [
        {
          id: 1,
          desc: 'Testing Part 1',
          completed: false,
        },
        {
          id: 2,
          desc: 'Testing Part 2',
          completed: false,
        },
      ];

      localStorage.setItem('myList', deleteContents);

      clearcompletedmylist(deleteContents);
      expect(JSON.parse(localStorage.store.myList)).toStrictEqual(
        deleteContents,
      );
    });
  });
});
