import { Button } from "@rslib-poc/components-lib";
import { createRoot } from "react-dom/client";

import "./index.css";

function App() {
    return (
        <>
            <div>Hello!</div>
            <Button />
        </>
    )
}

const root = createRoot(document.getElementById("root")!);

root.render(<App />);
