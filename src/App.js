

import ComplateHeaderSearchPannel from "./components/headerComponents/ComplateHeaderSearchPannel"
import Hotbar from "./components/hotbarComponents/hotbar";
import CityListComponent from "./components/headerComponents/cityListComponent";
import { useSelector } from "react-redux";



function App() {
  const cityListState = useSelector(state => state.cityListState)
  return <>
    {cityListState ? <CityListComponent /> : ""}
    <ComplateHeaderSearchPannel />

    <Hotbar />

  </>
}

export default App;
