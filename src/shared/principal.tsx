import React from "react";
import Header from "../Header";

type Iprops = {
  children: React.ReactNode;
};

const PrincipalComponents = (props: Iprops) => {
  return (
    <div id="main-wrapper">
      <Header />
      <div className="page-wrapper">{props.children}</div>
    </div>
  );
};

export const withPrincipal = (component: any) => {
  const Component = component;

  return (): React.ReactElement => {
    return (
      <PrincipalComponents>
        <Component />
      </PrincipalComponents>
    );
  };
};

export default PrincipalComponents;