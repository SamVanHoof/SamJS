import React from 'react';
import PropTypes from 'prop-types';

class CookieContent extends React.Component {

  render() {
    return (
      <div className="cookie-container">
        <h1>{this.props.title}</h1>
        <p>{this.props.text}</p>
        <a href={this.props.linkUrl}>{this.props.linkText}</a>
        {
          this.props.linkUrl && this.props.linkText &&
          <div>
            <button onClick={() => this.props.hide(false)}>{this.props.btnDeclineText}</button>
            <button onClick={() => this.props.hide(true)}>{this.props.btnAcceptText}</button>
          </div>
        }
      </div>
    );
  }
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

CookieContent.dfaultProps = {
  linkUrl: '',
  linkText: '',
};

export default CookieContent;
