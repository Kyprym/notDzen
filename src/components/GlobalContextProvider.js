import { useState } from "react";
import { GlobalContextStore } from "./globalContextStore";
import ComplateHeaderSearchPannel from "./headerComponents/ComplateHeaderSearchPannel";
import CityListComponent from "./headerComponents/CityListComponent";
import Hotbar from "./hotbarComponents/hotbar";

export default function GlobalContextProvider() {
    const [cityListState, setCityListState] = useState(false)



    // ПОДКЛЮЧАЙ REDUX

    return <>
        <GlobalContextStore.Provider value={[cityListState, setCityListState]}>
            <CityListComponent />
            <ComplateHeaderSearchPannel />
            <Hotbar />
        </GlobalContextStore.Provider >
    </>
}