import type { ReactNode } from "react";
import { ReactComponent as WorkleapLogo } from "./workleap.svg";

import "./Button.css";

export interface ButtonProps {
    children: ReactNode;
}

export function Button({ children }: ButtonProps) {
    return (
        <div>
            <WorkleapLogo />
            <button className="my-button">{children}</button>
        </div>
    );
}
