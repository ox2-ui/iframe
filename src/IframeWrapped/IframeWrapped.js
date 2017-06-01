import PropTypes from 'prop-types';
import React from 'react';
import Iframe from '../Iframe';

const styles = {
  wrapper: {
    position: 'absolute',
    top: '0',
    left: '0',
    right: '0',
    bottom: '0',
  },
};

/**
 * IframeWrapped Component
 */
const IframeWrapped = (props) => {
  const { className, style, url } = props;

  const mergedStyles = {
    ...styles.wrapper,
    ...style,
  };

  return (
    <div
      className={className}
      style={mergedStyles}
    >
      <Iframe url={url} />
    </div>
  );
};

IframeWrapped.propTypes = {
  /**
   * The css class name of the root element.
   */
  className: PropTypes.string,
  /**
   * The css style object of the root element.
   */
  style: PropTypes.object,
  /**
   * Url to load into the iframe
   */
  url: PropTypes.string,
};

export default IframeWrapped;

