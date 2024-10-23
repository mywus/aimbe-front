import { CommandBar, Image, Stack } from "@fluentui/react";
import './Header.css'
import { logo } from '../../assets';

export const Header = () => {
    const headerItems = [
        {
          key: 'home',
          text: 'Home',
          iconProps: { iconName: 'Home' },
          onClick: () => console.log('Home clicked'),
        },
        {
          key: 'settings',
          text: 'Settings',
          iconProps: { iconName: 'Settings' },
          onClick: () => console.log('Settings clicked'),
        },
      ];
    
    return (
        <div style={{ position: 'sticky', height: 0, zIndex: 3}}>
          <Stack horizontal styles={{root: {height: 46, backdropFilter: 'blur(8px)', padding: 20, boxSizing: 'content-box'}}}>
            <Image src={logo} height="100%" styles={{ root: {padding: 4}}}/>
            <CommandBar
              items={headerItems}
              ariaLabel="Header"
              styles={{
                root: { backgroundColor: 'none' },
              }}
            />
          </Stack>
        </div>
    );
}