import Button from '@mui/material/Button';

export default function ({ text, cutomStyle, openModal }) {

    return (
        <Button variant="contained" sx={{
            ...cutomStyle,
            '&:hover': {
                backgroundColor: cutomStyle.backgroundColor
            }
        }} onClick={openModal}>{text}</Button>
    );
};