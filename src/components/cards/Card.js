import React from 'react';
import swal from '@sweetalert/with-react';
import './card.css';
import { dateFormat } from '../../transducers/dateFormat';
import { priceConverter } from '../../transducers/priceConverter';
import { Modal } from '../modal/Modal';
import { textStops } from '../../transducers/textStops';

export const Card = ({ tickets, currency }) => {
  const {
    origin,
    origin_name,
    destination,
    destination_name,
    departure_date,
    arrival_date,
    stops,
    price,
    departure_time,
    arrival_time,
  } = tickets;

  const finalPrice = priceConverter(price, currency);
  const date = dateFormat(departure_date);
  const dateArrival = dateFormat(arrival_date);
  const text = textStops(stops);

  return (
    <div className="wrapper">
      <div className="ticket">
        <div className="left">
          <div className="logo" />
          <button
            className="buy_button"
            type="button"
            onClick={() =>
              swal({
                content: <Modal />,
                buttons: {
                  cancel: 'Exit',
                },
              })
            }
          >
            <span className="buy_button_text">Купить</span>
            <span className="buy_button_text">за {finalPrice}</span>
          </button>
        </div>

        <div className="departure">
          <span className="departure_time">{departure_time}</span>
          <br />
          <span className="departure_text">{origin}, </span>
          <span className="departure_text">{origin_name}</span>
          <br />
          <span className="departure_text">{date}</span>
        </div>

        <div className="stops">
          <span className="numStops">{text}</span>
          <div className="plane" />
        </div>
        <div className="arrival">
          <span className="departure_time">{arrival_time}</span>
          <br />
          <span className="departure_text">{destination_name}, </span>
          <span className="departure_text">{destination}</span>
          <br />
          <span className="departure_text">{dateArrival}</span>
        </div>
      </div>
    </div>
  );
};
