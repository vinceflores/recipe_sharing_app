"use client"

import {
    MultiSelector,
    MultiSelectorContent,
    MultiSelectorInput,
    MultiSelectorItem,
    MultiSelectorList,
    MultiSelectorTrigger,
} from "@/components/ui/extension/multiSelect"
import * as React from "react"
import { Category } from "../lib/recipe.types"

type Option = Category
type MultiSelectCategoriesProps = {
    options: Option[]
    value: string[],
    setValue: React.Dispatch<React.SetStateAction<string[]>>
}

export function MultiSelectCategories(props: MultiSelectCategoriesProps) {
    const { options, value, setValue } = props;
    // const [open, setOpen] = React.useState(false)

    return (
        <MultiSelector className="w-full" values={value} onValuesChange={setValue} loop={false}>
            <div className="flex w-full space-x-2">
                <MultiSelectorTrigger className="w-full">
                    <MultiSelectorInput placeholder="Select categories" />
                </MultiSelectorTrigger>
            </div>
            <MultiSelectorContent>
                <MultiSelectorList className="max-h-28 overflow-scroll">
                    {options?.map((option) => (
                        <MultiSelectorItem className="capitalize" key={option.id} value={`${option.icon} ${option.name}`}>
                            {option.icon} {option.name}
                        </MultiSelectorItem>
                    ))}
                </MultiSelectorList>
            </MultiSelectorContent>
        </MultiSelector>
    )
}
