import React from "react";

import { HomeLayout } from "./HomeLayout";

type Props = {
  variant?: LayoutVariant;
};

type LayoutVariant = "home" ;

const layoutComponents: Record<LayoutVariant, React.FC> = {
  home: HomeLayout,
};

export const Layout: React.FC<Props> = (props) => {
  const LayoutComponent = React.useMemo(
    () => layoutComponents[props.variant],
    [props.variant]
  );

  return <LayoutComponent>{props.children}</LayoutComponent>;
};
