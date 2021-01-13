export const state = () => ({
  counter: 0,
  contacts: []
});

export const mutations = {
  increment(state) {
    state.counter++;
  },
  addContactToList(state, contactdata) {
    state.contacts.push(contactdata);
    console.log(state.contacts);
  }
};
