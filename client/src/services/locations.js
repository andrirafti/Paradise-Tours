import api from './api-config'

// for NON-children models this whole area works..//
//if you want a to make this  for a child check trainers..//
export const getAllLocations = async () => {
  const resp = await api.get('/locations');
  return resp.data;
}



export const getOneLocation = async (location_id) => {
  const resp = await api.get(`/locations/${location_id}`);
  return resp.data;
}
//  EVERYTHING Bottom not needed since i dont want them.../
//IF WE WANT to make a new gym,update one,delete one we can do it in here or not..//
//in my case all i want to do is show it, and show a specefic id of a gym and trainer..//
//only time i will do FULL Crud is for the clients./// 
// export const postProduct = async (productData) => {
//   const resp = await api.post('/products', { product: productData });
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