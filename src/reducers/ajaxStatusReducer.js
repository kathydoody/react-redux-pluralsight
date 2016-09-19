import * as types from '../actions/actionTypes';
import inititalState from './initialState';

function actionTypeEnsWIthSuccess(type) {
  return type.substring(type.length - 8) === '_SUCCESS';
}


export default function ajaxStatusReducer(state = inititalState.numAjaxCallsInProgress, action){
  if(action.type === types.BEGIN_AJAX_CALL){
    return state + 1;
  } else if (actionTypeEnsWIthSuccess(action.type)){
    return state -1;
  }
  return state;
}
