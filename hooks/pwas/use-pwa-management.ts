import { useEffect, useState, Dispatch,SetStateAction} from "react";
// interface PwaPrompt {
//     installPrompt:Event,
//     displayMode?:'browser tab'|'standalone'
// }



export default function usePwaManagement() {
    const [installPrompt, setImstallPrompt] = useState({})
    const [displayMode, setDisplayMode] = useState('')
    useEffect(() => {
        if (typeof window !== 'undefined') {
            console.log('use,  effent')
            pwaPrompts(setImstallPrompt)
            pwaDetector(setDisplayMode)
            
        }
    },[])
    const pwaPrompts = (setter:Dispatch<SetStateAction<Event>>) => {
        window.addEventListener("beforeinstallprompt", (event) => {
            event.preventDefault();
            setter( event )
            console.log('PWA',event.target)
        });
    }
    const pwaDetector = (setter:Dispatch<SetStateAction<string>>) => {
        if (window.matchMedia('(display-mode: standalone)').matches) {
            setter('standalone')
        } else {
            setter('browser tab')
        }
    }
    return {
        installPrompt,
        displayMode
    }
}
