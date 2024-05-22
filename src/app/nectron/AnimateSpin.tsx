import { PropsWithChildren } from "react";

export default function AnimateSpin({
    children
}: PropsWithChildren) {

    return(
        <div className="animate-spin">{children}</div>
    )
}