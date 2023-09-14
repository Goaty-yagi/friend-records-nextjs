import {
  IconButton,
  Flex,
  Box,
  Text,
  Input,
  useBoolean,
} from "@chakra-ui/react";
import { ChangeEvent, useState, FormEvent, useEffect } from "react";
import { BsCheck2Square, BsFileX } from "react-icons/bs";
import { RiEdit2Line } from "react-icons/ri";

interface Props {
  value: string;
  defaultValue?: string;
  name: string;
  title?: string;
  size?: string;
  maxLength?: number;
  inputWidth?:string;
  iconToEdit?: JSX.Element;
  iconIsEditting?: JSX.Element;
  iconIsReady?: JSX.Element;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  onSubmit: (event: FormEvent<HTMLFormElement>) => void;
}


// better not to use in loop. it moght break styling
export default function CustomEditableInput({
  name,
  title,
  value,
  defaultValue,
  size = "sm",
  maxLength = 20,
  inputWidth='150px',
  iconToEdit = <RiEdit2Line />,
  iconIsEditting = <BsFileX color={"red"} />,
  iconIsReady = <BsCheck2Square color={"green"} />,
  onChange,
  onSubmit,
}: Props) {
  const [isChanged, setIsChanged] = useState(false);
  const [isEditing, setIsEditing] = useBoolean(false);
  const [fixedDefaultValue, setFixedDefaultValue] = useState("");
  useEffect(() => {
    setFixedDefaultValue(defaultValue ? defaultValue : value);
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
              size={"xs"}
              type="submit"
              ml={"0.3rem"}
              onClick={customSubmit}
            />
          </>
        ) : (
          <>
            <IconButton
              aria-label="edit"
              icon={iconIsEditting}
              size={"xs"}
              ml={"0.3rem"}
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
          size={"xs"}
          ml={"0.3rem"}
          onClick={setIsEditing.on}
          icon={typeof iconToEdit !== "undefined" ? iconToEdit : <></>}
        />
      </Flex>
    );
  }

  return (
    <Flex w={"150%"} alignItems={"center"}>
      <Text mr={title?"0.8rem":"0.5rem"}>{title}</Text>
      <Box position={"relative"}>
        {isEditing ? (
          <>
            <Box h={"1.5rem"}>
              <Flex position={"absolute"} alignItems={"center"} top={-1}>
                <Input
                  autoFocus={true} 
                  maxLength={maxLength}
                  w={inputWidth}
                  size={size}
                  name={name}
                  defaultValue={fixedDefaultValue}
                  onChange={customOnChange}
                />
                <EditableControls />
              </Flex>
            </Box>
          </>
        ) : (
          <Flex position={"absolute"} top={-3} left={-2} wordBreak={'keep-all'} alignItems={"center"}>
            {fixedDefaultValue} <EditableControls />
          </Flex>
        )}
      </Box>
    </Flex>
  );
}
