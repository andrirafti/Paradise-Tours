import api from './api-config'

// for NON-children models this whole area works..//
//if you want a to make this  for a child check trainers..//
export const getAllEntertainment = async (location_id,hotel_id) => {
  const resp = await api.get(`/locations/${location_id}/hotels/${hotel_id}/entertainments`);
  return resp.data;
}
export const getOneEntertainment = async (location_id,hotel_id,entertainment_id) => {
  const resp = await api.get(`/locations/${location_id}/hotels/${hotel_id}/entertainments/${entertainment_id}`);
  return resp.data;
}