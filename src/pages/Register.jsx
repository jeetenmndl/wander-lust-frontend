import React from 'react'
import Navbar from '../components/common/Navbar'
import {
    Card,
    CardAction,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Button } from '../components/ui/button'
import { RefreshCcw } from 'lucide-react'
import { Input } from '../components/ui/input'
import { Label } from '../components/ui/label'
import CustomButton from '../components/common/CustomButton'

const Register = () => {
    return (
        <div>
            <Navbar />

            <div>
                <Card className="w-1/3 mx-auto mt-20">
                    <CardHeader className="border-b">
                        <CardTitle className="text-lg">Register to WanderLust</CardTitle>
                        <CardDescription>Enter your credentials below</CardDescription>
                        <CardAction>
                            <Button><RefreshCcw /></Button>
                        </CardAction>
                    </CardHeader>
                    <CardContent className="space-y-4 [&>div]:space-y-2">
                        <div>
                            <Label>Enter your name</Label>
                            <Input type={"text"} placeholder="Ram Bahadur" />
                        </div>

                         <div>
                            <Label>Enter your email</Label>
                            <Input type={"email"} placeholder="abc@gmail.com" />
                        </div>

                         <div>
                            <Label>Enter your password</Label>
                            <Input type={"password"} placeholder="**********" />
                        </div>

                        <div>
                            <Label>Confirm your password</Label>
                            <Input type={"password"} placeholder="**********" />
                        </div>
                    </CardContent>
                    <CardFooter>
                       <CustomButton text="submit" more="w-full" />
                    </CardFooter>
                </Card>
            </div>
        </div>
    )
}

export default Register