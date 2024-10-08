import { ReactNode } from "react";

interface HomeLayoutProps {
  children: ReactNode;
}

export default async function AfterLoginLayout({ children }: HomeLayoutProps): Promise<JSX.Element> {
  return (
    <div>
      after login layout
      {children}
    </div>
  );
}