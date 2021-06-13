import api from './api-config'

// for NON-children models this whole area works..//
//if you want a to make this  for a child check trainers..//
export const getAllHotels = async (location_id) => {
  const resp = await api.get(`/locations/${location_id}/hotels`);
  return resp.data;
}
export const getOneHotel = async (location_id,hotel_id) => {
  const resp = await api.get(`/locations/${location_id}/hotels/${hotel_id}`);
  return resp.data;
}
//IF WE WANT to make a new gym,update one,delete one we can do it in here or not..//
//in my case all i want to do is show it, and show a specefic id of a gym and trainer..//
//only time i will do FULL Crud is for the clients./// 
// export const postReview = async (id,reviewData) => {
//   const resp = await api.post(`/products/${id}/reviews`, { review: reviewData });
//   return resp.data;
// }

// export const putProduct = async (id, productData) => {
//   const resp = await api.put(`/products/${id}`, { product: productData });
//   return resp.data;
// }

// export const deleteProduct = async (id) => {
//   const resp = await api.delete(`/products/${id}`);
//   return resp.data;
// }