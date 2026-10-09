import { zodResolver } from '@hookform/resolvers/zod'
import React from 'react'
import { Controller, useForm } from 'react-hook-form'
import * as z from 'zod'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '../components/ui/card'
import { Field, FieldError, FieldLabel } from '../components/ui/field'
import { Input } from '../components/ui/input'
import { Button } from '../components/ui/button'
import Navbar from '../components/common/Navbar'

const formSchema = z.object({
    name: z.string().min(5, "name must be at least 5 characters"),
    email: z.string().min(5, "Email must be atleast 5 characters"),
    password: z.string().min(8, "Must be atleast 8 characters"),
    confirmPassword: z.string().min(8, "Must be atleast 8 characters")
}).refine(
    (data) => { return data.password === data.confirmPassword },
    {
        message: "Passwords do not match",
        path: ["confirmPassword"]
    }
)

const Register = () => {

    const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
            email: "",
            password: "",
            confirmPassword: ""
        }
    })

    const onSubmit = (data) => {
        console.log(data);
    }


    return (
        <main>
            <Navbar />
            <form onSubmit={form.handleSubmit(onSubmit)} className="w-1/4 mx-auto mt-20">
                <Card>

                    <CardHeader>
                        <CardTitle>Register to WanderLust</CardTitle>
                        <CardDescription>Enter your email and password to continue.</CardDescription>
                    </CardHeader>

                    <CardContent className={"space-y-4"}>

                         <Controller
                            name="name"
                            control={form.control}
                            render={({ field, fieldState }) => (
                                <Field data-invalid={fieldState.invalid}>
                                    <FieldLabel htmlFor={field.name}>Enter your Full Name</FieldLabel>
                                    <Input
                                        {...field}
                                        id={field.name}
                                        type="text"
                                        placeholder="Ram Bahadur"
                                        aria-invalid={fieldState.invalid}
                                    />
                                    {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
                                </Field>
                            )}
                        />

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

                        <Controller
                            name="confirmPassword"
                            control={form.control}
                            render={({ field, fieldState }) => (
                                <Field data-invalid={fieldState.invalid}>
                                    <FieldLabel htmlFor={field.name}>Confirm your Password</FieldLabel>
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

export default Register