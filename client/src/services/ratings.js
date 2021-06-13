import api from './api-config'

// for NON-children models this whole area works..//
//if you want a to make this  for a child check trainers..//
export const getAllReviews = async (location_id,hotel_id) => {
  const resp = await api.get(`/locations/${location_id}/hotels/${hotel_id}/ratings`);
  return resp.data;
}
export const getOneReview = async (location_id,hotel_id,ratings_id) => {
  const resp = await api.get(`/locations/${location_id}/hotels/${hotel_id}/ratings/${ratings_id}`);
  return resp.data;
}
//IF WE WANT to make a new gym,update one,delete one we can do it in here or not..//
//in my case all i want to do is show it, and show a specefic id of a gym and trainer..//
//only time i will do FULL Crud is for the clients./// 
export const postReview = async (location_id,hotel_id,reviewData) => {
  const resp = await api.post(`/locations/${location_id}/hotels/${hotel_id}/ratings`, { rating: reviewData });
  return resp.data;
}

// export const putProduct = async (id, productData) => {
//   const resp = await api.put(`/products/${id}`, { product: productData });
//   return resp.data;
// }

export const deleteReview = async (location_id,hotel_id,rating_id) => {
  const resp = await api.delete(`/locations/${location_id}/hotels/${hotel_id}/ratings/${rating_id}`);
  return resp.data;
}