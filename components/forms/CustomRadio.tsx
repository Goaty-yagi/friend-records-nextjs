import { Radio, RadioGroup, Stack } from "@chakra-ui/react";

interface Config {
  value: string;
  text: string;
  checked: boolean;
}

interface RadioProps {
  value: string;
  setter: any;
  defaltValue:string
  config: Config[];
}
export default function CustomRadio({ value, setter, defaltValue, config }: RadioProps) {
  return (
    <RadioGroup defaultValue={defaltValue} name="whoPayed">
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