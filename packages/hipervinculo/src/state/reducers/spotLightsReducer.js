import * as types from '../actionTypes';

const spotLightsReducer = (state, action) => {
    switch(action.type) {
        case types.SET_SPOT_LIGHT:
            return [
                ...state,
                {
                    ...action.props
                }
            ];
        case types.UPDATE_SPOT_LIGHT:
            return [
                ...state.filter(spotLight => spotLight.spotLightId !== action.props.spotLightId),
                {
                    ...action.props
                }
            ]
        case types.REMOVE_SPOT_LIGHT:
            return state.filter(spotLight => spotLight.spotLightId !== action.props.spotLightId);
        default:
            return state;
    }
};

export default spotLightsReducer;
