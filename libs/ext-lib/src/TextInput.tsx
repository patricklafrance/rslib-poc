import { ReactComponent as WorkleapLogo } from "./workleap.svg";

export function TextInput() {
    return (
        <div>
            <WorkleapLogo />
            <input type="text" className="my-text-input" />
        </div>
    )
}
