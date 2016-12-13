import React, { PropTypes } from 'react';
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
const Iframe = (props) => {
  const { className, style, url } = props;

  const mergedStyles = {
    ...styles.frame,
    ...style,
  };

  return (
    <AutoSizer>
      {({ height, width }) => (
        <iframe
          className={className}
          style={mergedStyles}
          src={url}
          width={width}
          height={height}
        >
          <p>Your browser does not support iframes.</p>
        </iframe>
      )}
    </AutoSizer>
  );
};

Iframe.propTypes = {
  /**
   * The css class name of the root element.
   */
  className: PropTypes.string,
};

export default Iframe;
