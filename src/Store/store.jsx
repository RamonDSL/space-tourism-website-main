import axios from 'axios';
import { useEffect, useState } from 'react';

export const getPageData = async page => {
    const response = await axios.get("data.json")
    const pagesData = await response.data
    
    return pagesData[page]
}

export const usePersistedState = (key, initialValue) => {
    const [state, setState] = useState(() => {
        const storageValue = localStorage.getItem(key)

        if (storageValue) {
            return JSON.parse(storageValue)
        } else {
            return initialValue
        }
    })

    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(state))
    }, [key, state])

    return [state, setState]
}