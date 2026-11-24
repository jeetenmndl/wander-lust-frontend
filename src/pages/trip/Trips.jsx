import React, { useEffect } from 'react'
import api from '../../api/axios';

const Trips = () => {
    const [userTrips, setUserTrips] = React.useState([]);

    useEffect(()=>{
        const fetchData = async () => {
            const response = await api.get("/trip");
            setUserTrips(response.data);
        }

        fetchData();
    }, [])
  return (
    <div>

    </div>
  )
}

export default Trips