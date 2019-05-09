/*同意管理actions ,dispatch*/
import {createAction} from 'redux-actions';

export const counterAdd = createAction('counter/add' );

export const counteraddAsync = createAction('counter/addAsync');