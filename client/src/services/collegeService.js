import axios from 'axios';

export default {
  getAll: async () => {
    let res = await axios.get('/api/college');
    return res.data || [];
  },

  getOne: async (id) => {
    let res = await axios.get('/api/college/' + id);
    return res.data;
  }
}