

import ComplateHeaderSearchPannel from "./components/headerComponents/ComplateHeaderSearchPannel"
import Hotbar from "./components/hotbarComponents/hotbar";
import CityListComponent from "./components/headerComponents/CityListComponent";
import { useSelector } from "react-redux";
import { News } from "./components/newsComponents/News";
import { Theme } from "./components/themeComponents.js/Theme";
import { Articles } from "./components/articles/articles";




function App() {
  const cityListState = useSelector(state => state.cityListState)
  return <>
    {cityListState ? <CityListComponent /> : ""}
    <ComplateHeaderSearchPannel />
    <div id="informationContentBlock">
      <span>
        <Hotbar />
      </span>
      <div id="rootContentBlock">
        <div id="newsAndThemeBlock">
          <News />
          <Theme />
        </div>
        <Articles />
      </div>

    </div>


  </>
}

export default App;
