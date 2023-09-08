import React, {useEffect, useState,createContext,useContext} from "react";
import {ethers} from "ethers";

//internal import
import {} from '../Utils/apiFeature'

const StateContext = createContext();

export const StateContextProvider = ({childern}) => {

    const DAPP_NAME = "GPT_MEMBERSHIP"
    return(
        <StateContext.Provider value = {{DAPP_NAME}}>
        {childern}
        </StateContext.Provider>
    
    )
}

export const useStateContext = () => useContext(StateContext);