import React from 'react';
import PropTypes from 'prop-types';

const CookieContent = (props) => {
  return (
    <div className="cookie-container">
      <h1>{props.title}</h1>
      <p>{props.text}</p>
      <a href={props.linkUrl}>{props.linkText}</a>
      {
        props.linkUrl && props.linkText &&
        <div>
          <button onClick={() => props.hide(false)}>{props.btnDeclineText}</button>
          <button onClick={() => props.hide(true)}>{props.btnAcceptText}</button>
        </div>
      }
    </div>
  );
}

CookieContent.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  btnDeclineText: PropTypes.string.isRequired,
  btnAcceptText: PropTypes.string.isRequired,
  hide: PropTypes.func.isRequired,
  linkUrl: PropTypes.string,
  linkText: PropTypes.string,
};

CookieContent.defaultProps = {
  linkUrl: '',
  linkText: '',
};

export default CookieContent;
