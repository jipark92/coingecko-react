import React, { useEffect, useState } from "react";
import "./App.css";
import DataTable from "./components/datagrid/DataTable";
import NavBar from "./components/navbar/NavBar";
import axios from "axios";

function App() {
    const [coinData, setCoinData] = useState([]);
    const [coin, setCoin] = useState([]);

    useEffect(() => {
        getAllCoinData();
        getCoin();
    }, []);

    const getAllCoinData = async () => {
        const response = await axios.get(
            "https://api.coingecko.com/api/v3/search?query=%20"
        );
        if (response.status === 200) {
            setCoinData(response.data?.coins);
        }
    };

    const getCoin = async () => {
        const response = await axios.get(
            "https://api.coingecko.com/api/v3/search?query=%20"
        );
        if (response.status === 200) {
            setCoin(response.data);
        }
    };

    console.log("data", coin);

    return (
        <div className="App">
            <NavBar />
            <DataTable data={coinData} />
        </div>
    );
}

export default App;
