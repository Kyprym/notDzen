

import ComplateHeaderSearchPannel from "./components/headerComponents/ComplateHeaderSearchPannel"
import Hotbar from "./components/hotbarComponents/hotbar";
import CityListComponent from "./components/headerComponents/cityListComponent";
import { useSelector } from "react-redux";
import { NewsComponent } from "./components/newsComponents/newsComponent";



function App() {
  const cityListState = useSelector(state => state.cityListState)
  return <>
    {cityListState ? <CityListComponent /> : ""}
    <ComplateHeaderSearchPannel />
    <div id="informationContentBlock">
      <Hotbar />
      <NewsComponent />
    </div>

  </>
}

export default App;
