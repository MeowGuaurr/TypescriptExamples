import { type PropsWithChildren } from "react"

type HeaderProps = PropsWithChildren<{
    imageProps : {
        src: string,
        alt: string,
    }
}>

export default function Header({imageProps, children}: HeaderProps) {
    return <header>
        <img {...imageProps}/>
        {children}
    </header>
}