const initState = {
    load: false
}

type ActionTypes = LoadingACType

type LoadingACType = ReturnType<typeof LoadingAC>

export const LoadingAC = (load: boolean): any => {
    return {
        type: 'LOADING',
        payload: {
            load
        }
    } as const
}


export const loadingReducer = (state = initState, action: ActionTypes): typeof initState => { // fix any
    switch (action.type) {
        case 'LOADING': {
            return {...state, load: action.payload.load}
        }
        default:
            return state
    }
}

