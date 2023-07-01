import { Radio, RadioGroup, Stack } from "@chakra-ui/react";

interface Config {
  value: string;
  text: string;
  checked: boolean;
}

interface RadioProps {
  name: string;
  setter: any;
  defaltValue:string
  config: Config[];
}
export default function CustomRadio({ name, setter, defaltValue, config }: RadioProps) {
  return (
    <RadioGroup defaultValue={defaltValue} name={name}>
      <Stack direction="row">
        {config.map((e, index) => (
            <Radio
              key={index}
              value={e.value}
              onChange={setter}
            >
              {e.text}
            </Radio>
        ))}
      </Stack>
    </RadioGroup>
  );
}