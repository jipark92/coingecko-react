import React, { useEffect, useState } from "react";
import "./App.css";
import DataTable from "./components/datagrid/DataTable";
import NavBar from "./components/navbar/NavBar";
import axios from "axios";
import { HTTP_STATUS } from "./constants/constants";

function App() {
    const [coinData, setCoinData] = useState([]);
    const [searchData, setSearchData] = useState([]);

    useEffect(() => {
        getCoinData();
    }, [searchData]);

    const getCoinData = async () => {
        const response = await axios({
            url: `https://api.coingecko.com/api/v3/search?query=${searchData}`,
            method: "get",
        });
        if (response.status === HTTP_STATUS.OK) {
            setCoinData(response.data?.coins);
        }
    };

    return (
        <div className="App">
            <NavBar setSearchData={setSearchData} />
            <DataTable data={coinData} />
        </div>
    );
}

export default App;
