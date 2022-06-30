import React from 'react';
import Ticket from './Ticket';
import PropTypes from 'prop-types';
import './TicketList.css'

function TicketList(props) {
  return (
    <React.Fragment>
      <hr />
      <div className='list'>
      {props.ticketList.map((ticket) =>
        <Ticket
          whenTicketClicked = { props.onTicketSelection }
          names={ticket.names}
          location={ticket.location}
          issue={ticket.issue}
          id={ticket.id}
          key={ticket.id}/>
        )}
      </div>
    </React.Fragment>
  );
}

TicketList.propTypes = {
  ticketList: PropTypes.array,
  onTicketSelection: PropTypes.func
};

export default TicketList;