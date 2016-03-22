import { LOAD, loadPanelIfNeeded } from '../actions';
import { spy, stub } from 'sinon';
import test from 'tape';

const APP = 'app.com';
const NOT = 'not-app.com';

function getState() {
  return {
    apps: {
      [APP]: {
        isLoading: false,
        isReady: true
      }
    }
  };
};

test('TODO #loadPanelIfNeeded', t => {
  t.equals(typeof loadPanelIfNeeded(APP), 'function', 'is a thunk');

  // const appDispatch = spy();
  // const app = loadPanelIfNeeded(APP)(appDispatch, getState);

  // t.notOk(appDispatch.called, 'an existing app doesn\'t trigger a load');

  // const notDispatch = spy();
  // const not = loadPanelIfNeeded(NOT)(notDispatch, getState);

  // t.ok(notDispatch.calledOnce, 'a non-existing app triggers a load');

  // t.deepEquals(notDispatch.firstCall.args, [{
  //   type: LOAD,
  //   payload: {
  //     app: NOT
  //   }
  // }], 'gets the payload right');

  t.end();
});