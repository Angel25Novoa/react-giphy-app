import { useEffect, useState } from "react"
import { getGiffs } from "../helpers/getGiffs"

export const useFetchGifs = (category) => {
    const [state, setState] = useState({
        data: [],
        loading: true
    })

    
        useEffect(() => {
            getGiffs(category)
                .then(imgs => {
                    setTimeout(() => {
                        setState({
                            data: imgs,
                            loading: false
                        })
                    }, 2000)
                })
        }, [category])
    


    return state 
}