export const counterReducer = (state, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return {
                count: (state.count >= action.stock) ? state.count : state.count + 1,
            };
        case 'DECREMENT':
            return {
                count: (state.count <= 1) ? 1 : state.count - 1,
            };
        default:
            return state;
    }
};