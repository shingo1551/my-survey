import { createStore } from '@stencil/store';
import { Survey, Question } from './interface';

const { state, onChange } = createStore({
  survey: null as Survey,
  question: null as Question,
  page: 0,
  length: 0,
  last: false,
  complete: false,
});

onChange('survey', value => {
  state.page = 0;
  state.length = value.questions?.length;
  state.complete = false;
  save();
});

onChange('page', value => {
  state.last = state.length === value;
  if (value) state.question = state.survey.questions[value - 1];
  save();
});

onChange('complete', _ => {
  save();
});

function load() {
  const s = sessionStorage.getItem('survey');
  if (s) {
    const o = JSON.parse(s);
    state.survey = o.survey;
    state.page = o.page;
    state.complete = o.complete;
  }
}

function save() {
  const o = {
    survey: state.survey,
    page: state.page,
    complete: state.complete,
  };
  sessionStorage.setItem('survey', JSON.stringify(o));
}

export function getJson() {
  const o = {
    survey: state.survey,
    page: state.page,
    complete: state.complete,
  };
  // console.log(JSON.stringify(o));
  return o;
}

export function setJson(o: any) {
  // console.log(JSON.stringify(o));
  if (o) {
    state.survey = o.survey;
    state.page = o.page;
    state.complete = o.complete;
  }
}

load();

export default state;
