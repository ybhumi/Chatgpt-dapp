import React, {useEffect, useState,createContext,useContext} from "react";
import {ethers} from "ethers";

//internal import
import {CheckIfWalletConnected,connectWallet,connectingwithContract} from '../Utils/apiFeature'
import { local } from "web3modal";

const StateContext = createContext();

export const StateContextProvider = ({childern}) => {

    const DAPP_NAME = "GPT_MEMBERSHIP"
    //state variable
    const [address, setAddress] = useState("");
    const [contractMembership, setContractMembership,] = useState([]);
    const [Free, setFree] = useState();
    const [userMembership, setUserMembership] = useState({});

    //fetch contract data

    const fetchData = async () => {
        try{

            //load data from local storage
            const freeTrail = localStorage.getItem("freeTrail");
            const FREE_TRAIL = JSON.parse(freeTrail);
            setFree(freeTrail);

            //get the contract data
            const contract = await connectingwithContract();
            const connectAccount = await connectWallet()
            setAddress(connectAccount)
            // console.log(contract)

            // const oneMonth = await contract.getMemberships(1)
            // const sixMonth = await contract.getMemberships(2)
            // const oneYear = await contract.getMemberships(3)


            //get membership

        }
        catch(error){
            console.log(error)

        }
    }
    useEffect(() => {
fetchData();
    }, [])
    //listing membership

    const listMembership = async () => {
        const amount =1;
        const MEMBERSHIP_NAME ="one Month"
        const MEMBERSHIP_COST = ethers.utils.parseUnits(
            amount.toString(),
            "ethers"
        )
        const MEMBERSHIP_DATE = "September 1 2023"

        const contract = await connectingwithContract();
        const list = await contract.list(
            MEMBERSHIP_NAME,
            MEMBERSHIP_COST,
            MEMBERSHIP_DATE
        )

        await list.wait()
        console.log(list)
        }

     
    

    return(
        <StateContext.Provider value = {{DAPP_NAME, listMembership}}>
        {childern}
        </StateContext.Provider>
    
    )
    }

export const useStateContext = () => useContext(StateContext);