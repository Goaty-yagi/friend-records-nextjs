import { RequireAuth } from '@/components/utils';
import type { Metadata } from "next";


const appName = process.env.APP_NAME
export const metadata: Metadata = {
      title: `${appName} | Dashboard`,
      description: `${appName} Dashboard page`,
    };

interface Props {
	children: React.ReactNode;
}

export default function Layout({ children }: Props) {
	return <RequireAuth>{children}</RequireAuth>;
}