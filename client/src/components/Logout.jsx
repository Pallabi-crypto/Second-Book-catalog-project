import axios from 'axios'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const Logout = ({ setRoles }) => {
    const navigate = useNavigate()

    useEffect(() => {
        axios.get(`${import.meta.env.VITE_API_URL}/auth/logout`, {
            withCredentials: true
        })
        .then(res => {
            console.log("Logout API response:", res.data)

            if (res.data.logout) {
                setRoles(null)   // ✅ FIXED
                navigate('/login') // ✅ better UX
            }
        })
        .catch(err => console.log(err))
    }, [])

    return null
}

export default Logout