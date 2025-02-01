import { createContext, useReducer } from "react";

// 1️⃣ Create the Context
export const WorkoutContext = createContext();

// 2️⃣ Reducer function to handle state updates
export const workoutReducer = (state, action) => {
    switch (action.type) {
        case "SET_WORKOUTS":
            return { workouts: action.payload };
        case "ADD_WORKOUT":
            return { workouts: [action.payload, ...state.workouts] };
        case "DELETE_WORKOUT":
            return { workouts: state.workouts.filter((workout) => workout._id !== action.payload) };

        default:
            return state;
    }
};

// 3️⃣ Define Context Provider Component
export const WorkoutContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(workoutReducer, { workouts: [] });

    return (
        <WorkoutContext.Provider value={{ ...state, dispatch }}>
            {children}
        </WorkoutContext.Provider>
    );
};
