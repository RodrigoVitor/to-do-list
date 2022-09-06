import { Task } from "../types/Task"
import { TaskAction } from "../types/TaskAction"
import {v4 as uuidv4 } from 'uuid'
import { useReducer } from "react"

const initialState: Task[] = []

const reducer = (state: Task[], action: TaskAction) => {
    switch(action.type) {
        case 'ADD':
            if (action.payload?.value) {
                const newTask = [...state]
                newTask.push({
                    id: uuidv4(),
                    value: action.payload.value
                })
                return newTask
            }
        break;

        case 'DEL':
            if(action.payload?.id) {
                let newTask = [...state]
                newTask = newTask.filter(item => item.id !== action.payload?.id)
                return newTask
            }
        break;

        case 'DELALL':
            let newTask = [...state]
            newTask = []
            return newTask
        break;
    }

    return state
}


export const useTaskList = () => {
    return useReducer(reducer, initialState)
}

