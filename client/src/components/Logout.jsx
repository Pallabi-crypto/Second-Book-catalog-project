import axios from 'axios'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const Logout = ({ setRoles }) => {
    const navigate = useNavigate()
    console.log("setRoles:", setRoles)
    useEffect(() => {
        axios.get('http://localhost:3001/auth/logout', { withCredentials: true })
        .then(res => {
            console.log("Logout API response:", res.data)
            if(res.data.logout){
                setRoles('')
                navigate('/')
            }
        })
        .catch(err => console.log(err))
    }, [setRoles, navigate])

    return null
}

export default Logout