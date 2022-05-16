import {UsersArrayType, UserType} from "../HW8";


type SORTUpACType = ReturnType<typeof SortOnAC>
type SORTDownACType = ReturnType<typeof SortDownAC>
type CheckACType = ReturnType<typeof CheckAC>

type ActionTypes = { type: 'SORT', payload: 'up' | 'down' } | { type: 'CHECK', payload: number }


const SortOnAC = (up: string) => {
    return {

        type: 'SORT',
        payload: {
            up
        } as const
    }
}
const SortDownAC = (down: string) => {
    return {

        type: 'SORT',
        payload: {
            down
        } as const
    }
}

const CheckAC = (age: number) => {
    return {

        type: 'SORT',
        payload: {age} as const
    }
}


export const homeWorkReducer = (state: UserType[], action: ActionTypes): UserType[] => { // need to fix any
    switch (action.type) {
        case 'SORT': {
            const newState = [...state].sort((a, b) => {
                if (a.name < b.name) return 1
                else if (a.name > b.name) return -1
                else return 0 })

            return action.payload ==='down'? newState :newState.reverse()
        }
        case 'CHECK': {
            return state.filter(f => f.age >= action.payload)

        }
        default:
            return state
    }
}