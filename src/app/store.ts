export interface IAppState {
    dataUser: any;
}

export const INITIAL_STATE: IAppState = {
    dataUser: {}
};

export function rootReducer(state, action) {
    switch (action.type) {
        case 'LOGIN':
            return {
                dataUser: state.dataUser = {
                    username: (localStorage.getItem('username')) ? localStorage.getItem('username') : sessionStorage.getItem('username'),
                    imageUrl: (localStorage.getItem('image_url')) ? localStorage.getItem('image_url') : sessionStorage.getItem('image_url'),
                    idUser: (localStorage.getItem('id')) ? localStorage.getItem('id') : sessionStorage.getItem('id')
                }
            };
    }
    return state;
}
