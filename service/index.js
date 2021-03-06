import { get, post } from '@utils/api-requester'

export const getArtList = (param) => get('articles/list',param);
export const getArtListByTag = (param) => get('articles/findByTag',param);
export const saveArticle = (param) => post('articles/save',param);
export const getTimeList = (param) => get('time/list',param);
