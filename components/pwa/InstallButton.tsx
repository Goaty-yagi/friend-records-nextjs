import usePwaManagement from "@/hooks/pwas/use-pwa-management";
import { Button } from "@chakra-ui/react";
import { useEffect, useState, SetStateAction, Dispatch } from "react";

interface BeforeInstallPromptEvent extends Event {
  readonly platforms: string[];
  readonly userChoice: Promise<{
    outcome: "accepted" | "dismissed";
    platform: string;
  }>;
  prompt(): Promise<void>;
}

export default function InstallButton() {
  //   const { installPrompt, displayMode } = usePwaManagement();
  const [isAccepted, setIsaccepted] = useState<boolean>(false);
  const [installPrompt, setInstallPrompt] =
    useState<BeforeInstallPromptEvent | null>(null);
  useEffect(() => {
    if (typeof window !== "undefined") {
      console.log("UNDEFINED");
      window.addEventListener("beforeinstallprompt", (event: any) => {
        event.preventDefault();
        setInstallPrompt(event);
        console.log("platforms", event.platforms);
      });
    }
  }, []);
  const install = async () => {
    console.log("CLICK", installPrompt);
    if (installPrompt !== null) {
      await installPrompt.prompt();
      installPrompt.userChoice.then((choiceResult) => {
        if (choiceResult.outcome === "accepted") {
          setIsaccepted(true);
        } else {
          setIsaccepted(false);
        }
      });
    }
  };
  return (
    <>
      {installPrompt !== null && !isAccepted && (
        <Button onClick={install}>install</Button>
      )}
    </>
  );
}
