import {
  IconButton,
  Flex,
  Box,
  Text,
  Input,
  useBoolean,
} from "@chakra-ui/react";
import { ChangeEvent, useState, FormEvent, useEffect } from "react";

interface Props {
  value: string;
  name: string;
  title?: string;
  maxLength?: number;
  iconToEdit?: JSX.Element;
  iconIsEditting?: JSX.Element;
  iconIsReady?: JSX.Element;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  onSubmit: (event: FormEvent<HTMLFormElement>) => void;
}

export default function CustomEditableInput({
  name,
  title,
  value,
  maxLength = 20,
  iconToEdit,
  iconIsEditting,
  iconIsReady,
  onChange,
  onSubmit,
}: Props) {
  const [isChanged, setIsChanged] = useState(false);
  const [isEditing, setIsEditing] = useBoolean(false);
  const [fixedDefaultValue, setFixedDefaultValue] = useState("");
  useEffect(() => {
    setFixedDefaultValue(value);
  }, []);
  function customOnChange(e: any) {
    onChange(e);
    setIsChanged(true);
  }
  function customSubmit(e: any) {
    setIsEditing.off(),
      onSubmit(e),
      setFixedDefaultValue(value),
      setIsChanged(false);
  }
  function EditableControls() {
    return isEditing ? (
      <>
        {isChanged && value ? (
          <>
            <IconButton
              aria-label="edit"
              icon={iconIsReady}
              type="submit"
              ml={'0.3rem'}
              onClick={customSubmit}
            />
          </>
        ) : (
          <>
            <IconButton
              aria-label="edit"
              icon={iconIsEditting}
              ml={'0.3rem'}
              onClick={() => {
                setIsEditing.off(), setIsChanged(false);
              }}
            />
          </>
        )}
      </>
    ) : (
      <Flex justifyContent="center">
        <IconButton
          aria-label="edit"
          size="sm"
          ml={'0.3rem'}
          onClick={setIsEditing.on}
          icon={typeof iconToEdit !== "undefined" ? iconToEdit : <></>}
        />
      </Flex>
    );
  }

  return (
    <Flex w={"150%"} alignItems={"center"}>
      <Text mr={"0.5rem"}>{title}</Text>
      <Box position={"relative"}>
        {isEditing ? (
          <>
            <Box h={"2rem"}>
              <Flex position={"absolute"} alignItems={"center"} top={-1}>
                <Input
                  maxLength={maxLength}
                  w={"200px"}
                  size="sm"
                  name={name}
                  defaultValue={value ? value : fixedDefaultValue}
                  onChange={customOnChange}
                />
                <EditableControls />
              </Flex>
            </Box>
          </>
        ) : (
          <Flex alignItems={"center"}>
            {value ? value : fixedDefaultValue} <EditableControls />
          </Flex>
        )}
      </Box>
    </Flex>
  );
}
