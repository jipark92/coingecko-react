import React from "react";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import { DataGrid } from "@mui/x-data-grid";
import PropTypes from "prop-types";
import ProgressBar from "../progress/ProgressBar";

const columns = [
    { field: "market_cap_rank", headerName: "#" },
    {
        field: "name",
        headerName: "Coin",
        width: 200,
        renderCell: (params) => (
            <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                <Avatar alt="Coin Logo" src={`${params.row.thumb}`} />
                {`${params.row.name} -  ${params.row.symbol}`}
            </div>
        ),
    },
];

const DataTable = ({ data, isLoading }) => {
    return isLoading ? (
        <ProgressBar />
    ) : (
        <Box sx={{ height: "100vh", width: "100%" }}>
            <DataGrid rows={data} columns={columns} pageSizeOptions={[100]} />
        </Box>
    );
};

DataTable.propTypes = {
    data: PropTypes.array,
    isLoading: PropTypes.bool,
};

export default DataTable;
