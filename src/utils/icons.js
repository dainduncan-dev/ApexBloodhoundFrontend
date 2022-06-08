import {
  faMagnifyingGlass,
  faChartLine,
} from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";

const Icons = () => {
  return library.add(
    faMagnifyingGlass,
    faChartLine,
  );
};

export default Icons;
