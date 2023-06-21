import { RegisterForm } from '@/components/forms';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'site name | register',
  description: 'site name Auth register page'
}
export default function Page() {
  

  return (
    <>
    {<RegisterForm />}
    </>
  );
}
