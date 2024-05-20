import { FC, PropsWithChildren } from "react";
import Header from "./header/Header";
import dynamic from "next/dynamic";

const DynamicFooter = dynamic(() => import('./footer/Footer'), {
  ssr: false
})

const Layout: FC<PropsWithChildren<unknown>> = ({ children }) => {
  return (
    <div>
      <Header />
      {children}
      <DynamicFooter />
    </div>
  );
};

export default Layout;
