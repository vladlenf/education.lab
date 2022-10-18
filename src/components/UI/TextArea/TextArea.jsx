import React from 'react';

const TextArea = ({...props}) => {
    return (
        <textarea {...props} className={{width:'500px'}}>

        </textarea>
    );
};

export default TextArea;