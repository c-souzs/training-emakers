import axios from 'axios'
import { useCallback, useEffect, useState } from 'react'

export default function useFetchSimulate() {
    const [data, setData] = useState([])

    const getData = useCallback(() => {
        setTimeout(async () => {
            const dataResponse = await axios.get('/src/db/games.json')
            setData(dataResponse.data)
        }, Math.floor(Math.random() * (5000 - 1000 + 1)) + 1000)
    }, [])

    useEffect(() => {
        getData()
    }, [getData])

    return { data }
}
