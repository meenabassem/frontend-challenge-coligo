import {combineReducers} from "redux";
import {translationReducer} from "../modules/localization/localizationWrapper";
import {quizReducer} from "../modules/services/servicesReducer";



/**
 * @description check https://github.com/reduxjs/redux/issues/2709#issuecomment-357328709
 * for explaining the usage of 'as any'
 */
const reducers = combineReducers({
    intl: translationReducer,
    quizzes:quizReducer
} as any);
export {reducers};