var expect = require('expect');
var df = require('deep-freeze-strict');

var reducers = require('reducers');

describe('Reducers', () => {
  describe('searchTextReducer', () => {
    it('should set searchText', () => {
      var action = {
        type: 'SET_SEARCH_TEXT',
        searchText: 'Some Text'
      };
      var res = reducers.searchTextReducer(df(''), df(action));

      expect(res).toEqual(action.searchText);
    });
  });

  describe('showCompletedReducer', () => {
    it('should toggle showCompleted', () => {
      var action = {
        type: 'TOGGLE_SHOW_COMPLETED'
      };
      var res = reducers.showCompletedReducer(df(false), df(action));

      expect(res).toEqual(true);
    });
  });

  describe('todosReducer', () => {
    it('should add new todo', () => {
      var action = {
        type: 'ADD_TODO',
        todo: {
          id: 'abc123',
          text: 'Test Todo',
          completed: false,
          createdAt: 1234
        }
      };
      var res = reducers.todosReducer(df([]), df(action));

      expect(res.length).toEqual(1);
      expect(res[0]).toEqual(action.todo);
    });

    it('should add todos', () => {
      var todos = [{
        id: '111',
        text: 'something',
        completed: false,
        completedAt: undefined,
        createdAt: 1000
      }];
      var action = {
        type: 'ADD_TODOS',
        todos
      };
      var res = reducers.todosReducer(df([]), df(action));
      
      expect(res.length).toEqual(1);
      expect(res[0]).toEqual(todos[0]);
    });
  
    it('should wipe todos on logout', () => {
      var todos = [{
        id: '111',
        text: 'something',
        completed: false,
        completedAt: undefined,
        createdAt: 1000
      }];
      var action = {
        type: 'LOGOUT'
      };
      var res = reducers.todosReducer(df(todos), df(action));
      
      expect(res.length).toEqual(0);
    });

    it('should update todo', () => {
      var todos = [
        {
          id: 1,
          text: 'Test todo',
          completed: false,
          createdAt: '01/01/2017',
          completedAt: undefined
        }
      ];
      var updates = {
        completed: false,
        completedAt: null
      };
      var action = {
        type: 'UPDATE_TODO',
        id: todos[0].id,
        updates
      };
      var res = reducers.todosReducer(df(todos), df(action));
      
      expect(res[0].completed).toEqual(updates.completed);
      expect(res[0].completedAt).toEqual(updates.completedAt);
      expect(res[0].text).toEqual(todos[0].text);
    });
  });

  describe('authReducer', () => {
    it('should store uid on state with LOGIN action', () => {
      var action = {
        type: 'LOGIN',
        uid: 'abc123'
      };
      var res = reducers.authReducer(undefined, df(action));

      expect(res).toEqual({
        uid: action.uid
      });
    });

    it('should wipe auth on LOGOUT action', () => {
      var authData = {
        uid: '123abc'
      };
      var action = {
        type: 'LOGOUT'
      };
      var res = reducers.authReducer(df(authData), df(action));

      expect(res).toEqual({});
    });
  });
});