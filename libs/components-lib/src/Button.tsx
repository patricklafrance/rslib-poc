import type { ReactNode } from "react";
import "./Button.css";
import { ReactComponent as WorkleapLogo } from "./workleap.svg";

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
