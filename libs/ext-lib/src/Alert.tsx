import { AlertTrigger, Button, Content, Heading, Alert as OrbiterAlert } from "@workleap/orbiter-ui";

export function Alert() {
    return (
        <AlertTrigger>
            <Button variant="secondary">Open</Button>
            <OrbiterAlert primaryButtonLabel="Yes">
                <Heading>Autopilot</Heading>
                <Content>Are you sure you want to engage autopilot?</Content>
            </OrbiterAlert>
        </AlertTrigger>
    );
}
