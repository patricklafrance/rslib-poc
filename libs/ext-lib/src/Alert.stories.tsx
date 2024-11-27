import type { Meta, StoryObj } from "@storybook/react";
import { Alert } from "./Alert.tsx";

const meta: Meta<typeof Alert> = {
    component: Alert
};

export default meta;

type Story = StoryObj<typeof Alert>;

export const Default: Story = { };
