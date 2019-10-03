import React from 'react';
import { connect } from 'react-redux';
import superagent from 'superagent';
import './App.css';

const API_URL = 'http://localhost:4000';

class App extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {

    superagent.get(`${API_URL}/food`)
      .then(results => { this.props.loadStore(results.body) })
  };

  render() {



    return (
      <>
        <p>Check one two</p>
        <ul>
          {this.props.food.map(item => <li> {item.name} </li>)}
        </ul>
      </>
    );
  };
}

const mapStateToProps = (state) => ({
  food: state.food,
});

const mapDispatchToProps = (dispatch) => ({
  loadStore: (food) => {
    dispatch({
      type: 'FOOD_LOAD',
      payload: food,
    });
  },
});



export default connect(mapStateToProps, mapDispatchToProps)(App);
