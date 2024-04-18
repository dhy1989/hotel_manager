import axios from '../utils/request';

export const $login=async()=>{
    await  axios.get( '/api/index?ip&type=0')
}