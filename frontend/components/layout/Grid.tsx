"use client"

import React from 'react'
import { cn } from '../../lib/utils'
type GridProps = React.PropsWithChildren & {
    className?: string
}

const Grid: React.FC<GridProps> = (props) => {
    // grid-cols-1 md:grid-cols-3
    return (
        <div className={cn(props.className, "grid grid-cols-2 lg:grid-cols-3 gap-2 ")}>{props.children}</div>
    )
}

export default Grid 