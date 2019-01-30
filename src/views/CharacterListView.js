import React from "react";
import { connect } from "react-redux";

import { CharacterList } from "../components";
import { getStarWars } from '../actions';
// import actions

class CharacterListView extends React.Component {
  constructor() {
    super();
  }

  componentDidMount() {
    this.props.getStarWars();
  }

  render() {
    console.log(this.props)
    console.log(this.props.getStarWars)
    if (this.props.fetching) {
      return (
        <div>
          <h1>Loading</h1>
        </div>)// return something here to indicate that you are fetching data
    }
    return (
      <div className="CharactersList_wrapper">
        <CharacterList characters={this.props.characters} />
      </div>
    );
  }
}

// our mapStateToProps needs to have two properties inherited from state
// the characters and the fetching boolean
const mapStateToProps = state => {
  console.log(state)
  return {
  characters: state.charsReducer.characters,
  fetching: state.charsReducer.fetching,
  error: state.charsReducer.error
}}

export default connect(
  mapStateToProps,
  { getStarWars }
)(CharacterListView);