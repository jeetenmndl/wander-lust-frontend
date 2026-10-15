import { zodResolver } from '@hookform/resolvers/zod'
import React from 'react'
import { Controller, useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import * as z from 'zod'
import Navbar from './Navbar'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '../ui/card'
import { Field, FieldError, FieldLabel } from '../ui/field'
import { Input } from '../ui/input'
import { Button } from '../ui/button'



const budgetSchema = z.object({
    total: z.number().min(1, "Must be atleast 1"),
    spent: z.number().min(1, "Must be atleast 1")
})

const formSchema = z.object({
    title: z.string().min(5, "Title must be atleast 5 characters"),
    description: z.string().min(20, "Must be atleast 20 characters"),
    startDate: z.date(),
    endDate: z.date(),
    destinations: z.array(
        z.string().min(3, "Destination must be atleast 3 characters")
    ).min("Must include atleast one item"),
    budget: budgetSchema
})

const TripForm = () => {

    const navigate = useNavigate();


    const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: {
            title: "",
            description: "",
            startDate: "",
            endDate: "",
            destinations: [" "],
            budget: {
                total: "",
                spent: ""
            }
        }
    })

    const onSubmit = async (data) => {
        console.log(data);
    }


    return (
        <main>
            <form onSubmit={form.handleSubmit(onSubmit)} className="w-1/4 mx-auto mt-20">
                <Card>

                    <CardHeader>
                        <CardTitle>Log in to WanderLust</CardTitle>
                        <CardDescription>Enter your email and password to continue.</CardDescription>
                    </CardHeader>

                    <CardContent className={"space-y-4"}>

                        <Controller
                            name="email"
                            control={form.control}
                            render={({ field, fieldState }) => (
                                <Field data-invalid={fieldState.invalid}>
                                    <FieldLabel htmlFor={field.name}>Enter your Email</FieldLabel>
                                    <Input
                                        {...field}
                                        id={field.name}
                                        type="email"
                                        placeholder="abc@gmail.com"
                                        aria-invalid={fieldState.invalid}
                                    />
                                    {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
                                </Field>
                            )}
                        />

                        <Controller
                            name="password"
                            control={form.control}
                            render={({ field, fieldState }) => (
                                <Field data-invalid={fieldState.invalid}>
                                    <FieldLabel htmlFor={field.name}>Enter your Password</FieldLabel>
                                    <Input
                                        {...field}
                                        id={field.name}
                                        type="password"
                                        placeholder="*********"
                                        aria-invalid={fieldState.invalid}
                                    />
                                    {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
                                </Field>
                            )}
                        />


                    </CardContent>

                    <CardFooter className={"grid grid-cols-2 gap-2"}>
                        <Button variant='outline' type="button">Clear</Button>
                        <Button type="submit">Submit</Button>
                    </CardFooter>
                </Card>
            </form>

            <div className='text-sm text-gray-400 mt-6 text-center'>
                Do not have an account? 
                <a className='text-blue-600' href="/register">Register</a>
            </div>
        </main>
    )
}

export default TripForm