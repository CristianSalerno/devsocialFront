// tslint:disable-next-line: no-empty-interface
export interface IAppState {
}

export function rootReducer(state, action) {
    switch (action.type) {
        case 'INCREMENT': return { counter: state.counter + 1 };
    }
    return state;
}
