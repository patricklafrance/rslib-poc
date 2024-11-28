import { Button, Menu } from "@rslib-poc/components-lib";
import { Alert, TextInput } from "@rslib-poc/ext-lib";
import { generateRandomNumber } from "@rslib-poc/ts-lib";
import { ThemeProvider } from "@workleap/orbiter-ui";
import { createRoot } from "react-dom/client";

import "./index.css";

function App() {
    return (
        <>
            <div>Hello! {process.env.RenderRandomNumber ? generateRandomNumber() : ""}</div>
            <Button>Click me!</Button>
            <Menu />
            <Alert />
            <TextInput />
        </>
    );
}

const root = createRoot(document.getElementById("root")!);

root.render(
    <ThemeProvider colorScheme="light">
        <App />
    </ThemeProvider>
);
