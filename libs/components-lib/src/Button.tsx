import "./Button.css";
import { ReactComponent as WorkleapLogo } from "./workleap.svg";

export function Button() {
    return (
        <div>
            <WorkleapLogo />
            <button className="my-button">Click me!</button>
        </div>
    )
}
