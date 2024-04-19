import axios from '../utils/request';

export const $login=async()=>{
   return  await  axios.get( '/csc/api/index?ip&type=0')
}