import { Suspense } from "react";
import { Loader } from "./Loader";

export const Loadable = (Component) => (props) => {
  return (
    <Suspense fallback={<Loader />}>
      <Component {...props} />
    </Suspense>
  );
};
