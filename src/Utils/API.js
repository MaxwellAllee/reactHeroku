import {get} from 'axios';

const API = {
  get: async ()=>{
    const results = await get("https://aws.random.cat/meow")
    return results.data.file
  } 
}

export default API;