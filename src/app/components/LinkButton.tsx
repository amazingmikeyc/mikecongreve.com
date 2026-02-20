
import {ReactNode} from "react";
import Link from "next/link";

export function LinkButton({children, href}: {children:ReactNode, href:string}) {
    return (
        <button className="bg-indigo-50 hover:bg-indigo-200 rounded-sm p-1 border-1 border-gray-400">
            <Link href={href}>{children}</Link>
        </button>
    )
}