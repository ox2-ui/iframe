import PropTypes from 'prop-types';
import React from 'react';
import { AutoSizer } from 'react-virtualized';

const styles = {
  frame: {
    border: 'none',
    margin: '0',
    padding: '0',
  },
};

/**
 * Iframe Component
 */
const Iframe = props => {
  const { className, style, url } = props;

  const mergedStyles = {
    ...styles.frame,
    ...style,
  };

  return (
    <AutoSizer>
      {({ height, width }) =>
        <iframe
          className={className}
          height={height}
          src={url}
          style={mergedStyles}
          width={width}
        >
          <p>Your browser does not support iframes.</p>
        </iframe>}
    </AutoSizer>
  );
};

Iframe.propTypes = {
  /**
   * The css class name of the iframe element.
   */
  className: PropTypes.string,
  /**
   * The css style object of the iframe element.
   */
  style: PropTypes.object,
  /**
   * Url to load into the iframe
   */
  url: PropTypes.string,
};

export default Iframe;
