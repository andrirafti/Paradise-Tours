import api from './api-config'


export const getAllReviews = async (location_id,hotel_id,suite_id) => {
  const resp = await api.get(`/locations/${location_id}/hotels/${hotel_id}/suites/${suite_id}/rating_suites`);
  return resp.data;
}



//IMPORTANT when doing a post notice how rating_suites is what i use in post man.. use the singular version of it to post as seen below to make it be reviewData//
export const postReview = async (location_id,hotel_id,suite_id,reviewData) => {
  const resp = await api.post(`/locations/${location_id}/hotels/${hotel_id}/suites/${suite_id}/rating_suites`, { rating_suite: reviewData });
  return resp.data;
}