import React,{createContext,useContext,useReducer} from 'react';

//prepareing the data layer
export const StateContext = createContext();

//wrap our components, provider the provider
export const StateProvider = ({reducer,initialState,children}) =>(
    <StateContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </StateContext.Provider>
);

//this is how can we use it inside of a component
export const useStateValue = () => useContext(StateContext);