"use client"
import { Input } from '@/components/ui/input'
import { zodResolver } from "@hookform/resolvers/zod"
import { Search } from 'lucide-react'
import { useForm } from "react-hook-form"
import { z } from 'zod'
import { Button } from './ui/button'
import {
    Form,
    FormControl,
    FormField,
    FormItem
} from './ui/form'

export const SearchFormScema = z.object({
    query: z.string().min(1)
})

export interface SearchFormProps {
    handlesubmit: (values: z.infer<typeof SearchFormScema>) => Promise<void>
}

const SearchForm = (props: SearchFormProps) => {
    const form = useForm<z.infer<typeof SearchFormScema>>({
        resolver: zodResolver(SearchFormScema),
        defaultValues: {
            query: ""
        }
    })

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(props.handlesubmit)} className="flex w-full max-w-sm items-center space-x-2">
                <FormField
                    control={form.control}
                    name={'query'}
                    render={({ field }) => (
                        <FormItem>
                            <FormControl>
                                <Input {...field} type="search" placeholder="Search recipes" />
                            </FormControl>
                        </FormItem>
                    )}
                />

                <Button type="submit" size="icon">
                    <Search className="h-4 w-4" />
                    <span className="sr-only">Search</span>
                </Button>
            </form>
        </Form>
    )
}

export default SearchForm
    ;