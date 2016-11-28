import axios from 'axios'

// ----------------------     ACTIONS     ----------------------------------

// %^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^
export const SET_SLIDES = 'SET_SLIDES';
export const CLEAR_SLIDES = "CLEAR_SLIDES";

export const askServerForTheSlides = (lesson_id) => {
  return dispatch => {
    axios.get(`/api/slides/lesson_id/${lesson_id}`)
    .then(res => {
      dispatch(setSlides(res.data));
    })
    .catch(err => {
      console.error(err);
      console.log('Error getting the slides from the db.');
    });
  }
}

export const clearSlidesBeforeRender = () => {
  return dispatch => {
    dispatch(clearSlides());
  }
}

// NOTE: action creator for setting the topics.
export const setSlides = (slides) => {
  return {
    type: SET_SLIDES,
    slides
  }
}

export const clearSlides = () => {
  return {
    type: CLEAR_SLIDES,
    slides: []
  }
}
// %^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^

// --------------------         REDUCER         --------------------------

export const slidesReducer = (state = [], action) => {
  switch (action.type) {
    case SET_SLIDES:
      // NOTE: need to sort the slides in the order they should appear.
      action.slides.sort((a, b) => {
        return a.number - b.number;
      });
      return action.slides;
    case CLEAR_SLIDES:
      return action.slides;

    default:
      return state
  }
}
