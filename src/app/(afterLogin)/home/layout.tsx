import { ReactNode } from "react";

interface HomeLayoutProps {
  children: ReactNode;
}

export default async function HomeLayout({ children }: HomeLayoutProps): Promise<JSX.Element> {
  return (
    <div>
      home layout
      {children}
    </div>
  );
}