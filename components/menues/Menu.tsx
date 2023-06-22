import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Box,
  IconButton,
} from "@chakra-ui/react";
import React from "react";
import MenuLink from "./MenuLink";

interface Config {
  labelText: string;
  icon?: JSX.Element;
  path?: string;
  isVisible: boolean;
  clickEvent?: (Event: any) => void;
}

interface Props {
  config: Config[];
  iconBtn?: JSX.Element;
  btnText?: string;
}

export default function Form({ config, iconBtn, btnText }: Props) {
  return (
    <>
      <Menu>
        <MenuButton
          as={IconButton}
          aria-label="Options"
          icon={iconBtn ? iconBtn : <></>}
          variant="outline"
        >
          {btnText ? btnText : ""}
        </MenuButton>
        <MenuList>
          {config.map(
            (input) =>
              input.isVisible && (
                <Box key={input.labelText}>
                  <MenuLink path={input.path} clickEvent={input.clickEvent}>
                    <MenuItem
                      icon={input.icon ? input.icon : <></>}
                    >
                      {input.labelText}
                    </MenuItem>
                  </MenuLink>
                </Box>
              )
          )}
        </MenuList>
      </Menu>
    </>
  );
}
