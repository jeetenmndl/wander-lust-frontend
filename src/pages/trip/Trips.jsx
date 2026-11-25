import React, { useEffect } from 'react'
import api from '../../api/axios';
import { Card, CardAction, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '../../components/ui/card';
import { Button } from '../../components/ui/button';

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
    <div className='px-20 py-8'>
      <Card>
        <CardHeader className="border-b">
          <CardTitle>Your Trips</CardTitle>
          <CardDescription>View and manage your trips.</CardDescription>
          <CardAction>
            <a href="/trips/add"> <Button>Add Trip</Button> </a>
          </CardAction>
        </CardHeader>

        <CardContent className={"grid grid-cols-3 gap-4"}>
          {
            userTrips.length == 0 ?
            <div>No trips to show. Create a new trip.</div> :
            userTrips.map((t)=>{
              return (
                <Card>
                  <CardHeader className="border-b">
                    <CardTitle> {t.title} </CardTitle>
                    <CardDescription> {t.startDate} - {t.endDate}</CardDescription>
                  </CardHeader>

                  <CardContent>
                    <p> {t.description} </p>
                  </CardContent>

                  <CardFooter>
                    <p> Total Budget: Rs. {t.budget.total}</p>
                  </CardFooter>
                </Card>
              )
            })
          }
        </CardContent>
        <CardFooter>
          Total Trips: {userTrips.length}
        </CardFooter>
      </Card>
    </div>
  )
}

export default Trips