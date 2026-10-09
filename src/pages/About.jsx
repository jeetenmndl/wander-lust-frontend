import React from 'react'
import Navbar from '../components/common/Navbar'
import { Button } from '../components/ui/button'
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

const About = () => {


  // let count = 0;
  const [count, setCount] = React.useState(0);

  return (
    <div>
      <Navbar />

<div className='flex justify-center py-20 gap-4'>
      <button> {count} </button>

      <Button onClick={()=>{setCount(count + 1); console.log(count)}} >Click here</Button>
    </div>


      <Card className="w-200">
        <CardHeader>
          <CardTitle>Card Title</CardTitle>
          <CardDescription>Card Description</CardDescription>
          <CardAction>Card Action</CardAction>
        </CardHeader>
        <CardContent>
          <p>Card Content</p>
        </CardContent>
        <CardFooter>
          <p>Card Footer</p>
        </CardFooter>
      </Card>
    </div>
  )
}

export default About