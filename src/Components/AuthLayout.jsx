import React, { useEffect, useState } from 'react'
import {useSelector} from 'react-redux'
import {useNavigate} from 'react-router-dom'

export default function Protected({children, authencation = true})
 {  
    const navigate = useNavigate()
    const [loader, setLoader] = useState(true)
    const authStatus = useSelector(state => state.auth.status)

    useEffect(() => {
        if(authencation && authStatus !== authencation){
            navigate("/login")
        } else if(!authencation && authStatus !== authencation){
            navigate("/")
        }
        setLoader(false)
    }, [authStatus, navigate, authencation])

  return loader ? <h1>Loading...</h1> : <>{children}</>
}
