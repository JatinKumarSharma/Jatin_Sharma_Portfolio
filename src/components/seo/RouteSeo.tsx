import { useLocation } from "react-router-dom";
import SeoHead from "./SeoHead";

export default function RouteSeo() {
  const { pathname } = useLocation();
  return <SeoHead path={pathname} />;
}
