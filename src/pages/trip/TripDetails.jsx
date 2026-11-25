import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import api from '../../api/axios';

const TripDetails = () => {
    const { id } = useParams();

    const [ tripData, setTripData ] = React.useState(null);

    useEffect(()=>{
        const fetchTrip = async ()=>{
            const response = await api.get(`/trip/${id}`);

            setTripData(response.data);
        }

        fetchTrip();
    })
  return (
    <div>TripDetails</div>
  )
}

export default TripDetails