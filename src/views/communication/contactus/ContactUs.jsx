/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable no-unused-vars */
/* eslint-disable default-case */
/* eslint-disable react/button-has-type */
/* eslint-disable react/prop-types */
import React, { useState, useRef } from 'react';
import key from 'uniqid';
import { ThreeDots } from 'react-loader-spinner';
import { toast } from 'react-toastify';
import Logo from '../../shared/Logo';
import SIcon from '../../shared/SIcon';

function ContactUs({
  socialMedia,
  contactResponse,
}) {
  const contactUsBtn = useRef();
  const contactUsBtn2 = useRef();
  const [displayContactUs, setDisplayContactUs] = useState();
  const [firstName, setFirstName] = useState();
  const [lastName, setlastName] = useState();
  const [email, setEmail] = useState();
  const [message, setMessage] = useState();

  const handleContactUsBtnClicked = () => {
    setDisplayContactUs(!displayContactUs);
  };
  const handleContactUsBtn2Clicked = () => {
    setDisplayContactUs(!displayContactUs);
  };
  const handleInputData = (a, b) => {
    a.preventDefault();
    switch (b) {
      case 'firstname': {
        setFirstName(a.target.value);
        break;
      }
      case 'lastname': {
        setlastName(a.target.value);
        break;
      }
      case 'email': {
        setEmail(a.target.value);
        break;
      }
      case 'message': {
        setMessage(a.target.value);
        break;
      }
    }
  };
  return (
    <div>
      <div className={`contactUs ${displayContactUs && 'c-open'}`}>
        {displayContactUs && (
        <div className="contact-us-inner">
          <div className="top-side d-flex d-md-block justify-content-between align-items-center">
            <div>
              <p>
                <strong>Hi there! 👋</strong>
              </p>
            </div>
            <div className="d-md-none">
              <span onClick={handleContactUsBtnClicked}><i className="bi bi-x-lg" /></span>
            </div>
          </div>
          <div className="info-side d-flex justfy-content-center align-items-center">
            <div className="info-side-inner d-flex">
              <Logo width={40} height={40} />
              <SIcon icon="bi bi-chevron-right" styleClass="icon6" />
              <div className="social-m d-flex">
                {socialMedia.map(item => (
                  <SIcon
                    key={key()}
                    icon={item.icon}
                    styleClass="icon5"
                    title={item.name}
                    link={item.link}
                  />
                ))}
              </div>
            </div>
          </div>
          <div className="c-st-12">
            <div className="info-side-2 d-flex justfy-content-center align-items-center">
              <div className="info-side-inner d-flex">
                <div className="ico-g">
                  <Logo width={40} height={40} />
                </div>
                <div className="sms-m d-flex">
                  <p>
                    Hello 🤟,  How may we help you?
                  </p>
                </div>
              </div>
            </div>
            <div className="contact-side">
              <div className="message-inner ml-3 mt-3 mr-3">
                <textarea
                  required
                  onChange={e => {
                    handleInputData(e, 'message');
                  }}
                  type="text"
                  placeholder="Message"
                />
              </div>
              <div className="name-inner ml-3 mt-3 mr-3">
                <input
                  required
                  onChange={e => {
                    handleInputData(e, 'firstname');
                  }}
                  type="text"
                  placeholder="First Name"
                />
                <input
                  required
                  onChange={e => {
                    handleInputData(e, 'lastname');
                  }}
                  type="text"
                  placeholder="Last Name"
                />
              </div>
              <div className="email-inner ml-3 mr-3 d-flex">
                <input
                  required
                  onChange={e => {
                    handleInputData(e, 'email');
                  }}
                  type="email"
                  placeholder="Enter your email"
                />
                <button
                  onClick={() => {}}
                  className="btn-send"
                >
                  {contactResponse.loading ? (
                    <ThreeDots
                      color="#fff"
                      height="30"
                      width="30"
                    />
                  ) : (
                    'Send'
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
        )}
        <SIcon
          elemRef={contactUsBtn}
          handleClick={handleContactUsBtnClicked}
          elmId="contact-us-btn"
          styleClass="icon4"
          icon={
            !displayContactUs ? 'fbi bi-chat-left-dots' : 'bi bi-x-lg'
          }
        />
      </div>
    </div>
  );
}

ContactUs.defaultProps = {
  contactResponse: {},
  socialMedia: [
    {
      name: 'Facebook',
      icon: 'bi bi-facebook',
      link: 'https://fb.me/sourcedevs ',
    },
    {
      name: 'Twitter',
      icon: 'bi bi-twitter',
      link: 'https://twitter.com/SourceDev2',
    },
    {
      name: 'Instagram',
      icon: 'bi bi-instagram',
    },
  ],
};

export default ContactUs;
