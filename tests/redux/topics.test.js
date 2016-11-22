import { createStore } from 'redux'
import chai, { expect } from 'chai'
import sinon from 'sinon'
import axios from 'axios';

import rootReducer from '../../browser/redux/index'
import actualStore from '../../browser/store'
import { axiosResponse } from './../utils.js'

import {
  SET_TOPICS,
  askServerForAllTopics,
  setTopics
} from '../../browser/redux/TopicsActions';

describe('Topics', () => {
  describe('Redux', () => {

    let testTopics;
    beforeEach('Create testing store from reducer', () => {
      testTopics = [
        { id: 1, name: "Reading music"},
        { id: 2, name: "Other cool topic"}
      ];
    });

    describe('action creators', () => {
      it(`${SET_TOPICS} returns expected action`, () => {
        const action = setTopics(testTopics);
        expect(action).to.be.deep.equal({
          type: SET_TOPICS,
          topics: testTopics
        });
      });
    });

    describe('store/reducer', () => {

      let testingStore;
      beforeEach('Create testing store from reducer', () => {
        testingStore = createStore(rootReducer);
      });

      it('Has initial state of empty topics array', () => {
        const currentStoreState = testingStore.getState();
        expect(currentStoreState.topics).to.be.deep.equal([]);
      });

      it(`reducing on ${SET_TOPICS}`, () => {
        testingStore.dispatch(setTopics(testTopics));
        const newState = testingStore.getState();
        expect(newState.topics).to.be.deep.equal(testTopics);
      });

      describe('thunks', () => {

        let axiosMethod;
        afterEach('Removing Function Mocks', () => {
          axios[axiosMethod].restore();
        });

        it('retrieving topics asynchronously', (done) => {
          const fakeDispatch = (dispatchedItem) => {
            testingStore.dispatch(dispatchedItem);
            const newState = testingStore.getState();
            expect(newState.topics).to.be.deep.equal(testTopics);
            done();
          }

          axiosMethod = 'get';
          let mock = sinon.mock(axios).expects(axiosMethod).once().withArgs('/api/topics/all')
          .returns(axiosResponse(testTopics));
          askServerForAllTopics()(fakeDispatch);
          mock.verify();
        });
      });
    });
  });
});
