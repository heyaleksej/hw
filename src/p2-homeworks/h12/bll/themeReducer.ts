
const THEME ='THEME'

const initState = {
    theme: 'classic'
};

type ActionCType = {
    theme:string,
    type: typeof THEME

}

export const ThemeReducerAC = (theme: string): ActionCType => {
    return {
        type: 'THEME', theme
    } as const
}


export const themeReducer = (state = initState, action: ActionCType): typeof initState => { // fix any
    switch (action.type) {
        case "THEME": {
            return {...state, theme: action.theme};
        }
        default:
            return state;
    }
};

