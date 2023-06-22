import { Button } from "@chakra-ui/react";
interface Props {
  provider: "google" | "facebook";
  children: React.ReactNode;
  [rest: string]: any;
}

export default function SocialButton({ provider, children, ...rest }: Props) {
  const variants = {
    color: "white.200",
    bg: "red.500",
  };
  return (
    <Button {...variants} {...rest}>
      {children}
    </Button>
  );
}
