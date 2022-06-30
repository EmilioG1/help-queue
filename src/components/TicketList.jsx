import React from 'react';
import Ticket from './Ticket';
import PropTypes from 'prop-types';
import './TicketList.css'

function TicketList(props) {
  return (
    <React.Fragment>
      <hr />
      <div className='list'>
      {props.ticketList.map((ticket, index) =>
        <Ticket names={ticket.names}
          location={ticket.location}
          issue={ticket.issue}
          key={index}/>
        )}
      </div>
    </React.Fragment>
  );
}

TicketList.propTypes = {
  ticketList: PropTypes.array
};

export default TicketList;