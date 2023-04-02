import React, { useEffect, useState } from "react";
import "./App.css";
import DataTable from "./components/datagrid/DataTable";
import NavBar from "./components/navbar/NavBar";
import ToastBar from "./components/toast/ToastBar";
import axios from "axios";
// import { HTTP_STATUS } from "./constants/constants";

function App() {
    const [coinData, setCoinData] = useState([]);
    const [searchData, setSearchData] = useState([]);
    const [isErrorModalOpen, setIsErrorModalOpen] = useState({
        open: false,
        vertical: "top",
        horizontal: "center",
    });

    useEffect(() => {
        getCoinData();
    }, [searchData]);

    const getCoinData = async () => {
        const response = await axios({
            url: `https://api.coingecko.com/api/v3/search?query=${searchData}`,
            method: "get",
        });
        if (response.status !== 200) {
            setIsErrorModalOpen({ ...isErrorModalOpen, open: true });
        }
        setCoinData(response.data?.coins);
    };

    return (
        <div className="App">
            <ToastBar
                isErrorModalOpen={isErrorModalOpen}
                handleClose={setIsErrorModalOpen}
            />

            <NavBar setSearchData={setSearchData} />
            <DataTable data={coinData} />
        </div>
    );
}

export default App;
