import type { Preview } from "@storybook/react";
import { ThemeProvider } from "@workleap/orbiter-ui";

import "@workleap/orbiter-ui/index.css";

const preview: Preview = {
    decorators: [Story => {
        return (
            <ThemeProvider colorScheme="light">
                <Story />
            </ThemeProvider>
        );
    }]
};

export default preview;
