import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { Category } from '@/lib/recipe.types'
import { ChevronsUpDown } from 'lucide-react'
import { useState } from 'react'
import { Button } from './ui/button'
import { Popover, PopoverContent, PopoverTrigger } from './ui/popover'

type CategorySelectProps = {
    categories: Category[],
    onSelectCategory: (category: Category) => void
}

function CategorySelect(props: CategorySelectProps) {
    const [open, setOpen] = useState(false)
    const [value] = useState<Category>(
        props.categories
            ? props.categories[0]
            : {
                icon: "",
                name: ""
            }
    )

    return (
        <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger asChild>
                <Button
                    variant="outline"
                    role="combobox"
                    aria-expanded={open}
                    className="w-[200px] justify-between"
                >
                    {value
                        ? props.categories.find((framework) => framework.name === value.name)?.name
                        : "Select category..."}
                    <ChevronsUpDown className="opacity-50" />
                </Button>
            </PopoverTrigger>
            <PopoverContent className="flex flex-col items-center p-0">
                <Select>
                    <SelectTrigger className="w-[180px]">
                        <SelectValue placeholder="Theme" />
                    </SelectTrigger>
                    <SelectContent>
                        {
                            props.categories && props.categories.map(category => (
                                <SelectItem key={category.name} value={category.name}>{category.name} </SelectItem>
                            ))
                        }
                    </SelectContent>
                </Select>
            </PopoverContent>
        </Popover >
    )
}

export default CategorySelect