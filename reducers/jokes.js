const types = {
    LOADING: 'LOADING',
    SUCCESS: 'SUCCESS',
    FAILURE: 'FAILURE',
}

export const actionCreators = {
    loading: () => ({ type: types.LOADING }),
    failure: () => ({ type: types.FAILURE }),
    success: (joke) => ({
        type: types.SUCCESS,
        payload: { joke },
    }),
}

export const initialState = {
    loading: false,
    error: false,
    joke: {},
}


export function reducer(state, action) {
    switch (action.type) {
        case types.LOADING:
            return { ...state, loading: true, error: false }
        case types.SUCCESS:
            return {
                ...state,
                loading: false,
                error: false,
                //   joke: [...state.photos, ...action.payload.photos],
                joke: action.payload.joke,
            }
        case types.FAILURE:
            return { ...state, loading: false, error: true }
    }
}