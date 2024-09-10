import { useDispatch } from "react-redux"

export const useMoreInfAction = () => {
    const dispatch = useDispatch()
    const showMoreInfWindow = () => {
        dispatch({
            type: "SHOW_MOREINF",
            payload: true
        });
    }
    const hideMoreInfWindow = () => {
        dispatch(
            {
                type: "HIDE_MOREINF",
                payload: false
            });
    };

    return {
        showMoreInfWindow,
        hideMoreInfWindow
    };
};