import api from './api-config'

// for NON-children models this whole area works..//
//if you want a to make this  for a child check trainers..//
export const getAllExcursions = async (location_id,hotel_id) => {
  const resp = await api.get(`/locations/${location_id}/hotels/${hotel_id}/excursions`);
  return resp.data;
}
export const getOneExcursion = async (location_id,hotel_id,excursion_id) => {
  const resp = await api.get(`/locations/${location_id}/hotels/${hotel_id}/excursions/${excursion_id}`);
  return resp.data;
}
//IF WE WANT to make a new gym,update one,delete one we can do it in here or not..//
//in my case all i want to do is show it, and show a specefic id of a gym and trainer..//
//only time i will do FULL Crud is for the clients./// 
export const postExcursion = async (location_id,hotel_id,excursionData) => {
  const resp = await api.post(`/locations/${location_id}/hotels/${hotel_id}/excursion`, { excursion: excursionData });
  return resp.data;
}

// export const putProduct = async (id, productData) => {
//   const resp = await api.put(`/products/${id}`, { product: productData });
//   return resp.data;
// }

export const deleteExcursion = async (location_id,hotel_id,excursion_id) => {
  const resp = await api.delete(`/locations/${location_id}/hotels/${hotel_id}/excursions/${excursion_id}`);
  return resp.data;
}