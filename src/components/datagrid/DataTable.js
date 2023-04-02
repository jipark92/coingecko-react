import React from "react";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import { DataGrid } from "@mui/x-data-grid";
import PropTypes from "prop-types";

const columns = [
    { field: "market_cap_rank", headerName: "#" },
    {
        field: "name",
        headerName: "Coin",
        width: 200,
        renderCell: (params) => (
            <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                <Avatar alt="Remy Sharp" src={`${params.row.thumb}`} />
                {`${params.row.name} ${params.row.symbol}`}
            </div>
        ),
    },
];

const DataTable = ({ data }) => {
    return (
        <Box sx={{ height: "100vh", width: "100%" }}>
            <DataGrid
                rows={data}
                columns={columns}
                pageSizeOptions={[5]}
                // disableRowSelectionOnClick
            />
        </Box>
    );
};

DataTable.propTypes = {
    data: PropTypes.array,
};

export default DataTable;
