import {ttypes} from "../HW12";

const initState = {
    theme: 'classic'
};

type ActionCType = {
    theme:ttypes,
    type: string

}

export const ThemeReducerAC = (theme: ttypes): ActionCType => {
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

