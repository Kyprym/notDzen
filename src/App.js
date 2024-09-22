

import ComplateHeaderSearchPannel from "./components/headerComponents/ComplateHeaderSearchPannel"
import Hotbar from "./components/hotbarComponents/hotbar";
import CityListComponent from "./components/headerComponents/cityListComponent";
import { useSelector } from "react-redux";
import { News } from "./components/newsComponents/News";
import { Theme } from "./components/themeComponents.js/Theme";
import { Articles } from "./articles/articles";




function App() {
  const cityListState = useSelector(state => state.cityListState)
  return <>
    {cityListState ? <CityListComponent /> : ""}
    <ComplateHeaderSearchPannel />
    <div id="informationContentBlock">
      <span>
        <Hotbar />
      </span>
      <div id="newsAndThemeBlock">
        <News />
        <Theme />
      </div>
      <Articles />
    </div>

  </>
}

export default App;
