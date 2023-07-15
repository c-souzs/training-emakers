import { useEffect } from 'react'

const useTitlePage = (title) => {
    useEffect(() => {
        document.title = `${title} - Trainee Emakers`
    }, [title])
    return null
}

export default useTitlePage
