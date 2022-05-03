import React, {useState} from 'react'
import Affairs from './Affairs'
import cstyle from './../../../src/commonStyles/HWBlock.module.css'

// types
export type AffairPriorityType = 'low' | 'high' | 'middle'
export type AffairType = {
    id: number
    name: string
    priority: AffairPriorityType
} // need to fix any
export type FilterType = 'all' | AffairPriorityType

// constants
const defaultAffairs: Array<AffairType> = [ // need to fix any
    {id: 1, name: 'React', priority: 'high'},
    {id: 2, name: 'anime', priority: 'low'},
    {id: 3, name: 'games', priority: 'low'},
    {id: 4, name: 'work', priority: 'high'},
    {id: 5, name: 'html & css', priority: 'middle'},
]

// pure helper functions
export const filterAffairs = (affairs: Array<AffairType>, filter: FilterType): Array<AffairType> => { // need to fix any
    if (filter === 'all') return affairs
    else return affairs.filter(a => a.priority === filter)// need to fix
}
export const deleteAffair = (affairs: Array<AffairType>, id: number): Array<AffairType> => {
    // need to fix any
    return affairs.filter(aff => aff.id !== id)// need to fix

}

function HW2() {
    const [affairs, setAffairs] = useState<Array<AffairType>>(defaultAffairs) // need to fix any
    const [filter, setFilter] = useState<FilterType>('all')

    const filteredAffairs = filterAffairs(affairs, filter)
    const deleteAffairCallback = (id: number) => setAffairs(deleteAffair(affairs, id)) // need to fix any

    return (
        <div className={cstyle.HWBlock}>

            <h2 className={cstyle.blockTitle}> homework 2
            </h2>
            {/*<hr className={s.title}/>*/}

            {/*should work (должно работать)*/}
            <Affairs
                data={filteredAffairs}
                setFilter={setFilter}
                deleteAffairCallback={deleteAffairCallback}
            />

            {/*<hr/>*/}
            {/*/!*для личного творчества, могу проверить*!/*/}
            {/*/!*<AlternativeAffairs/>*!/*/}
            {/*<hr/>*/}
        </div>
    )
}

export default HW2
