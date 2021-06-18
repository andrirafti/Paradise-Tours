import api from './api-config'

// for NON-children models this whole area works..//
//if you want a to make this  for a child check trainers..//
export const getAllEntertainmentReview = async (location_id,hotel_id,entertainment_id) => {
  const resp = await api.get(`/locations/${location_id}/hotels/${hotel_id}/entertainments/${entertainment_id}/rating_entertainments`);
  return resp.data;
}


export const postEntertainmentReview = async (location_id,hotel_id,entertainment_id,reviewData) => {
  const resp = await api.post(`/locations/${location_id}/hotels/${hotel_id}/entertainments/${entertainment_id}/rating_entertainments`, { rating_entertainment: reviewData });
  return resp.data;
}