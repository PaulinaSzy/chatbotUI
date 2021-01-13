export const state = () => ({
  counter: 0,
  contacts: []
});

export const mutations = {
  increment(state) {
    state.counter++;
  },
  addcontact(state, contactdata) {
    state.contacts.push(contactdata);
  }
};
