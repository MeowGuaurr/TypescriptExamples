import { type ComponentPropsWithoutRef, type ElementType, type ReactNode } from "react";

type ContainerProps<T extends ElementType> = { // Type T that we are expecting must be based on ElemtType that we are passing to ComponentProps
    as?: T;
    children: ReactNode;
} & ComponentPropsWithoutRef<T>; // type can be used to get hold of the default props accepted by the build in elements

export default function Container<C extends ElementType> ({
    as, 
    children,
    ...props
}: ContainerProps<C>) {
    // Remap const with uppercase allows to useit as a return component, with lowercase will not work
    const Component = as || 'div';
    return <Component className="container" {...props}>{children}</Component>
}