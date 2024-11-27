import { AmbassadorshipIcon } from "@hopper-ui/icons";
import { IconButton, Item, MenuTrigger, Menu as OrbiterMenu } from "@workleap/orbiter-ui";

export function Menu() {
    return (
        <MenuTrigger>
            <IconButton aria-label="View tasks" variant="secondary">
                <AmbassadorshipIcon />
            </IconButton>
            <OrbiterMenu>
                <Item key="launch">Launch...</Item>
                <Item key="eject">Eject...</Item>
                <Item key="land">Land...</Item>
                <Item key="help">Help</Item>
                <Item key="exit">Exit</Item>
            </OrbiterMenu>
        </MenuTrigger>
    );
}
