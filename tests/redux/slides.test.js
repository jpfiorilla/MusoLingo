import { createStore } from 'redux';
import chai, { expect } from 'chai';
import sinon from 'sinon';
import axios from 'axios';

import rootReducer from '../../browser/redux/index';
import actualStore from '../../browser/store';
import { axiosResponse } from './../utils.js';

import {
  SET_SLIDES,
  askServerForTheSlides,
  setSlides
} from '../../browser/redux/SlidesActions';

describe('Slides', () => {
  describe('Redux', () => {

    let testSlides;
    let sortedTestSlides;
    beforeEach('Create testing store from reducer', () => {
      testSlides = [
        { id: 2, title: "1", number: 2, slideContent: {}, lesson_id: 1},
        { id: 1, title: "1", number: 1, slideContent: {}, lesson_id: 1}
      ];
      sortedTestSlides = [
        { id: 1, title: "1", number: 1, slideContent: {}, lesson_id: 1},
        { id: 2, title: "1", number: 2, slideContent: {}, lesson_id: 1}
      ]
    });

    describe('action creators', () => {
      it(`${SET_SLIDES} returns expected action`, () => {
        const action = setSlides(testSlides);
        expect(action).to.be.deep.equal({
          type: SET_SLIDES,
          slides: testSlides
        });
      });
    });

    describe('store/reducer', () => {

      let testingStore;
      beforeEach('Create testing store from reducer', () => {
        testingStore = createStore(rootReducer);
      });

      it('Has initial state of empty slides array', () => {
        const currentStoreState = testingStore.getState();
        expect(currentStoreState.slides).to.be.deep.equal([]);
      });

      it(`reducing on ${SET_SLIDES}`, () => {
        testingStore.dispatch(setSlides(testSlides));
        const newState = testingStore.getState();
        expect(newState.slides).to.be.deep.equal(testSlides);
      });

      describe('thunks', () => {

        let axiosMethod;
        afterEach('Removing Function Mocks', () => {
          axios[axiosMethod].restore();
        });

        it('retrieving slides asynchronously', (done) => {
          const fakeDispatch = (dispatchedItem) => {
            testingStore.dispatch(dispatchedItem);
            const newState = testingStore.getState();
            expect(newState.slides).to.be.deep.equal(testSlides);
            done();
          }

          axiosMethod = 'get';
          let mock = sinon.mock(axios).expects(axiosMethod).once().withArgs('/api/slides/lesson_id/1')
          .returns(axiosResponse(testSlides));
          askServerForTheSlides(1)(fakeDispatch);
          mock.verify();
        });
      });
    });
  });
});
