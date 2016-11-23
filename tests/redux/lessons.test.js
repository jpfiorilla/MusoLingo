import { createStore } from 'redux';
import chai, { expect } from 'chai';
import sinon from 'sinon';
import axios from 'axios';

import rootReducer from '../../browser/redux/index';
import actualStore from '../../browser/store';
import { axiosResponse } from './../utils.js';

import {
  SET_LESSONS,
  askServerForAllLessons,
  setLessons
} from '../../browser/redux/LessonsActions';

describe('Lessons', () => {
  describe('Redux', () => {

    let testLessons;
    beforeEach('Create testing store from reducer', () => {
      testLessons = [
        { id: 1, title: "Reading Rhythm 2", level: 1, description: "Description 1"},
        { id: 2, title: "Reading Rhythm 2", level: 2, description: "Description 2"}
      ];
    });

    describe('action creators', () => {
      it(`${SET_LESSONS} returns expected action`, () => {
        const action = setLessons(testLessons);
        expect(action).to.be.deep.equal({
          type: SET_LESSONS,
          lessons: testLessons
        });
      });
    });

    describe('store/reducer', () => {

      let testingStore;
      beforeEach('Create testing store from reducer', () => {
        testingStore = createStore(rootReducer);
      });

      it('Has initial state of empty lessons array', () => {
        const currentStoreState = testingStore.getState();
        expect(currentStoreState.lessons).to.be.deep.equal([]);
      });

      it(`reducing on ${SET_LESSONS}`, () => {
        testingStore.dispatch(setLessons(testLessons));
        const newState = testingStore.getState();
        expect(newState.lessons).to.be.deep.equal(testLessons);
      });

      describe('thunks', () => {

        let axiosMethod;
        afterEach('Removing Function Mocks', () => {
          axios[axiosMethod].restore();
        });

        it('retrieving lessons asynchronously', (done) => {
          const fakeDispatch = (dispatchedItem) => {
            testingStore.dispatch(dispatchedItem);
            const newState = testingStore.getState();
            expect(newState.lessons).to.be.deep.equal(testLessons);
            done();
          }

          axiosMethod = 'get';
          let mock = sinon.mock(axios).expects(axiosMethod).once().withArgs('/api/lessons/all')
          .returns(axiosResponse(testLessons));
          askServerForAllLessons()(fakeDispatch);
          mock.verify();
        });
      });
    });
  });
});
