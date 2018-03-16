import React, { PropTypes } from 'react';
import CookieContent from '../cookieContent/CookieContent';
import './styles.css';

class CookieToaster extends React.Component {
  state = { hidden: true };

  componentDidMount() {
    const cookieHasPopped = localStorage.getItem('cookieHasPopped');

    if (!cookieHasPopped) {
      setTimeout(() => {
        this.setState({ hidden: false });
      }, 3000)
    }
  }

  accept = () => {
    localStorage.setItem('cookieHasPopped', true);
  };

  hide = (accepted) => {
    this.setState({ hidden: true }, () => {
      if (accepted) {
        this.accept();
        this.props.accept();
      } else {
        this.props.decline();
      }
    })
  };

  render() {
    return (
      <div>
        {!this.props.popped &&
        <div className={`pop-over-effect ${(this.state.hidden) ? 'hidden' : 'pop-over-show'}`}>
          <div
            className={`cookie-toaster ${(this.props.type === 'top' || this.props.type === 'modal') && `cookie-toaster-${this.props.type}`}`}>
            <CookieContent title={this.props.title}
                           text={this.props.text}
                           btnDeclineText={this.props.btnDeclineText}
                           btnAcceptText={this.props.btnAcceptText}
                           hide={this.hide}
                           linkUrl={this.props.linkUrl}
                           linkText={this.props.linkText}
            />
          </div>
        </div>
        }
      </div>
    );
  }
}

CookieToaster.propTypes = {
  title: PropTypes.string,
  text: PropTypes.string,
  btnDeclineText: PropTypes.string,
  btnAcceptText: PropTypes.string,
  accept: PropTypes.func,
  decline: PropTypes.func,
  popped: PropTypes.bool,
  linkUrl: PropTypes.string,
  linkText: PropTypes.string,
  type: PropTypes.string,
};

CookieToaster.defaultProps = {
  title: 'Give me a property "title" to change this.',
  text: 'Give me a property "text" to change this.',
  btnAcceptText: 'Give me a property "btnAcceptText" to change this.',
  btnDeclineText: 'Give me a property "btnDeclineText" to change this.',
  accept: () => {
  },
  decline: () => {
  },
  popped: false,
  linkUrl: '#',
  linkText: 'Give me a property "linkText" to change this.',
  type: 'bottom',
};

export default CookieToaster;
