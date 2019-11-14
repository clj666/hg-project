import { INITCART } from '../types/actionTypes'
// import cartApi from '../../apis/cartApi'

export default {
  state: {
		List: []
  },
  mutations: {
    'INIT': (state, data) => {
      console.log('#3 mutations: '+data)
      if(state.List.indexOf(data) == -1){
          state.List.push(data);
      }
    },
    'DEL': (state, data) => {
      console.log('#5 mutations: '+data)
      for(let i = 0;i <state.List.length ;i++){
        if(state.List[i] == data){
            state.List.splice(i,1);
        }
			}
    }
  },
  actions: {
    [INITCART]: async ({ commit },pId) => {
//       let data = await cartApi.getHomeData()
      console.log('#2 actions: '+pId)
      commit('INIT', pId)
    },
    'DELCART': async ({ commit },pId) => {
      console.log('#4 actions: '+pId)
        commit('DEL', pId)
      }
  },
  getters: {
    'GETCART': ({ List }) => {
      return List
    }
  }
}
