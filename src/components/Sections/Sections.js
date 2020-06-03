import React from "react";
import PropTypes from "prop-types";
import SectionItem from "./SectionItem";
import "./Sections.scss";

const Sections = (props) => {
  const titles = ["Frontend", "ReactJS", "VueJS", "Angular"];
  const sectionBlocks = titles.map((title) => (
    <SectionItem key={title} sectionTitle={title} handleButtonClick={props.handleButtonClick} />
  ));

  return <div className="sections">{sectionBlocks}</div>;
};

Sections.propTypes = {
  handleButtonClick: PropTypes.func
}

export default Sections;
