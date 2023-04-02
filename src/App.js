import React, { useEffect, useState } from "react";
import "./App.css";
import DataTable from "./components/datagrid/DataTable";
import NavBar from "./components/navbar/NavBar";
import ToastBar from "./components/toast/ToastBar";
import ProgressBar from "./components/progress/ProgressBar";
import axios from "axios";
import { HTTP_STATUS } from "./constants/constants";

function App() {
    const [coinData, setCoinData] = useState([]);
    const [searchData, setSearchData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [isErrorModalOpen, setIsErrorModalOpen] = useState({
        open: false,
        vertical: "top",
        horizontal: "center",
    });

    useEffect(() => {
        getCoinData();
    }, [searchData]);

    const getCoinData = async () => {
        try {
            setIsLoading(true);
            const response = await axios({
                url: `https://api.coingecko.com/api/v3/search?query=${searchData}`,
                method: "get",
            });
            if (response.status === HTTP_STATUS.OK) {
                setCoinData(response.data?.coins);
            }
            setCoinData(response.data?.coins);
        } catch (error) {
            setIsErrorModalOpen({ ...isErrorModalOpen, open: true });
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="App">
            <ToastBar
                isErrorModalOpen={isErrorModalOpen}
                handleClose={setIsErrorModalOpen}
            />
            <NavBar setSearchData={setSearchData} />
            {isLoading ? <ProgressBar /> : <DataTable data={coinData} />}
        </div>
    );
}

export default App;
