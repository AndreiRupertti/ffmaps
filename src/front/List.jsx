import React from 'react';
import PropTypes from 'prop-types';

const getPath = (filePath) => {
    return `file:///wsl.protocol/mnt/c/Users/PICHAU/Desktop/Drey/field_maps_ff7/FF7_Field_Maps_33_WM32.png`
}

const List = ({ assets }) => {
    return (
        <div>
            {
                assets.map(a => (<img key={a.filePath} src={getPath(a.filePath)}/>))
            }
        </div>
    );
};


List.propTypes = {
    assets: PropTypes.array 
};


export default List;
