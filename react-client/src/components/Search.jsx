import React from 'react';
import ReactDOM from 'react-dom';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }


  reqEventful () {
    this.props.eventful();
  }

  reqMeetUP () {
    this.props.meetUp();
  }

  render () {
    return (
      <div>
        <button onClick = {this.reqEventful.bind(this)}>searchEventful</button>
        <button onClick = {this.reqMeetUP.bind(this)}>searchMeetUp</button>
      </div>
    );
  }




}

export default Search;