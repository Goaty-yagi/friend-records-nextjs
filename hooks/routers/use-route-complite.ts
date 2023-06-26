import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';


export default function useRouteComplite({event}:any): void {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    if(mounted) {
        const router = useRouter();
        router.events.on('routeChangeComplete', handleChangeRoute);

        return () => {
          router.events.off('routeChangeComplete', handleChangeRoute)
        }
    }
    return setMounted(true)
  }, [mounted]);

  function handleChangeRoute () {
    console.log('complete');
    event()
  }
}