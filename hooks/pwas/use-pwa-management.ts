import { useEffect, useState} from "react";

interface BeforeInstallPromptEvent extends Event {
  readonly platforms: string[];
  readonly userChoice: Promise<{
    outcome: "accepted" | "dismissed";
    platform: string;
  }>;
  prompt(): Promise<void>;
}

export default function usePwaManagement() {
  const [isAccepted, setIsaccepted] = useState<boolean>(false);
  const [installPrompt, setInstallPrompt] =
    useState<BeforeInstallPromptEvent | null>(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("beforeinstallprompt", (event: any) => {
        event.preventDefault();
        setInstallPrompt(event);
      });
    }
  }, []);
  const install = async () => {
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
  return {
    install,
    installPrompt,
    isAccepted
  }
}
