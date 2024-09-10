import { useDispatch } from 'react-redux';

export const useCityActions = () => {
    const dispatch = useDispatch();

    const showCityList = () => {
        dispatch({
            type: "SHOW_CITY",
            payload: true
        });
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