import * as React from "react";
import Snackbar from "@mui/material/Snackbar";
import PropTypes from "prop-types";

const ToastBar = ({ isErrorModalOpen, handleClose }) => {
    const { vertical, horizontal, open } = isErrorModalOpen;

    return (
        <div>
            <Snackbar
                anchorOrigin={{ vertical, horizontal }}
                open={open}
                onClose={() =>
                    handleClose({ ...isErrorModalOpen, open: false })
                }
                message="Slow Down! API has limited request!"
                key={vertical + horizontal}
            />
        </div>
    );
};

ToastBar.propTypes = {
    handleClose: PropTypes.func,
    isErrorModalOpen: PropTypes.object,
};

export default ToastBar;
