import React from 'react';
import PropTypes from 'prop-types';

const getPath = (filePath) => {
    return '/FF7_Field_Maps_05_WM4.png'
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
