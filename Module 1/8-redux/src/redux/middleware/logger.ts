export const Logger = (state) => (next) => (action) => {
    console.log(state);
    console.log(next);
    console.log(action)
}