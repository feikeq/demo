export const state = () => ({
    list: [{text:'123456789',done:false},{text:2,done:false}]
  })
  
  export const mutations = {
    add(state, text) {
        
      state.list.push({
        text,
        done: true
      });

      console.log('ttttttiis',this);

        return this.$axios.get('/api/fk68').then(res => {
            console.log('resresresresres',res);
            store.commit('setStars', res.data)
        });
    },
    remove(state, { todo }) {
      state.list.splice(state.list.indexOf(todo), 1)
    },
    toggle(state, todo) {
      todo.done = !todo.done
    }
  }