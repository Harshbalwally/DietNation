import React from 'react';
import styled from 'styled-components';

const Card = () => {
  return (
    <StyledWrapper>
      <div className="card">
        <h3 className="card__title">Title
        </h3>
        <p className="card__content">Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
        <div className="card__date">
          April 15, 2022
        </div>
        <div className="card__arrow">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" height={15} width={15}>
            <path fill="#fff" d="M13.4697 17.9697C13.1768 18.2626 13.1768 18.7374 13.4697 19.0303C13.7626 19.3232 14.2374 19.3232 14.5303 19.0303L20.3232 13.2374C21.0066 12.554 21.0066 11.446 20.3232 10.7626L14.5303 4.96967C14.2374 4.67678 13.7626 4.67678 13.4697 4.96967C13.1768 5.26256 13.1768 5.73744 13.4697 6.03033L18.6893 11.25H4C3.58579 11.25 3.25 11.5858 3.25 12C3.25 12.4142 3.58579 12.75 4 12.75H18.6893L13.4697 17.9697Z" />
          </svg>
        </div>
      </div>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  /* this card is inspired from - https://georgefrancis.dev/ */

  .card {
    --border-radius: 0.75rem;
    --primary-color: #7257fa;
    --secondary-color: #3c3852;
    width: 80%;
    max-width: 280px;
    font-family: "Arial";
    padding: 1rem;
    cursor: pointer;
    border-radius: var(--border-radius);
    background: #f1f1f3;
    box-shadow: 0px 8px 16px 0px rgb(0 0 0 / 3%);
    position: relative;
    transition: transform 0.2s ease;
  }

  .card:hover {
    transform: scale(1.03);
  }

  .card > * + * {
    margin-top: 1.1em;
  }

  .card .card__content {
    color: var(--secondary-color);
    font-size: 0.86rem;
  }

  .card .card__title {
    padding: 0;
    font-size: 1.3rem;
    font-weight: bold;
  }

  .card .card__date {
    color: #6e6b80;
    font-size: 0.8rem;
  }

  .card .card__arrow {
    position: absolute;
    background: var(--primary-color);
    padding: 0.4rem;
    border-top-left-radius: var(--border-radius);
    border-bottom-right-radius: var(--border-radius);
    bottom: 0;
    right: 0;
    transition: 0.2s;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .card svg {
    transition: 0.2s;
  }
    

  /* Hover effect */
  .card:hover .card__title {
    color: var(--primary-color);
    text-decoration: underline;
  }

  .card:hover .card__arrow {
    background: #111;
  }

  .card:hover .card__arrow svg {
    transform: translateX(3px);
  }
    

  /* Responsive Design */
  @media (max-width: 768px) {
    .card {
      max-width: 180px;
      padding: 0.8rem;
    }

    .card .card__title {
      font-size: 1.1rem;
    }

    .card .card__content {
      font-size: 0.8rem;
    }

    .card .card__date {
      font-size: 0.75rem;
    }
  }

  @media (max-width: 480px) {
    .card {
      max-width: 100%;
      padding: 0.7rem;
    }

    .card .card__title {
      font-size: 1rem;
    }

    .card .card__content {
      font-size: 0.75rem;
    }

    .card .card__date {
      font-size: 0.7rem;
    }

    .card .card__arrow {
      padding: 0.3rem;
    }
  }
    

`;


export default Card;
