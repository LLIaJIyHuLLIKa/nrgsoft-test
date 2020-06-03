import React from 'react';
import PropTypes from 'prop-types';

const SectionItem = (props) => {
    return (
        <div onClick={() => props.handleButtonClick(props.sectionTitle)} className="sections__item">
            <span>{props.sectionTitle}</span>
        </div>
    )
}

SectionItem.propTypes = {
    sectionTitle: PropTypes.string,
    handleButtonClick: PropTypes.func
}

export default SectionItem;
