import { Button } from "@rslib-poc/components-lib";
import { generateRandomNumber } from "@rslib-poc/ts-lib";
import { createRoot } from "react-dom/client";

import "./index.css";

function App() {
    return (
        <>
            <div>Hello! {generateRandomNumber()}</div>
            <Button>Click me!</Button>
        </>
    );
}

const root = createRoot(document.getElementById("root")!);

root.render(<App />);
