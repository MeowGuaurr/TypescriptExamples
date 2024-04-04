import { type ComponentPropsWithoutRef } from "react";

// Merge ButtonProps type witn href set to never, not to accept href references un button
type ButtonProps = ComponentPropsWithoutRef<'button'> & {
    href? : never;
};

type AnchorProps = ComponentPropsWithoutRef<'a'> & {
    href? : string;
};

// Type predicate to check the value from props: ButtonProps | AnchorProps 
// is true then is going to be type AnchorProps
function isAnchorProps(props: ButtonProps | AnchorProps): props is AnchorProps {
    return 'href' in props;
}
export default function Button(props: ButtonProps | AnchorProps) {
    if (isAnchorProps(props)) {
        return <a className="button" {...props}></a>
    }
    
    return <button className="button" {...props}></button>
}