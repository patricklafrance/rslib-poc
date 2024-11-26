import { ReactComponent as WorkleapLogo } from "./workleap.svg";

import "./TextInput.css";

export function TextInput() {
    return (
        <div>
            <WorkleapLogo />
            <input type="text" className="my-text-input" />
        </div>
    )
}
