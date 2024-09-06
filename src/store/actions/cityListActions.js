import { useDispatch, useSelector } from 'react-redux';

export const useCityActions = () => {
    const dispatch = useDispatch();
    const cityListState = useSelector(state => state.cityListState.state)

    const showCityList = () => {
        dispatch({
            type: "SHOW_CITY",
            payload: true
        });
        console.log(cityListState)
    };

    const hideCityList = () => {
        dispatch({
            type: "CLOSE_CITY",
            payload: false
        });
    };

    return {
        showCityList,
        hideCityList
    };
};