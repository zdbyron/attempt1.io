import React, { Component, PropTypes } from 'react'
import { createStore } from 'redux'
import { Provider, connect } from 'react-redux'

//action
const playClick = { type: 'playAudio'}

//reducer
function player(state = 0, action){
	switch (action.type) {
		case 'playAudio':
			return { audio: audio}
		default:
			return state
	}
}

//store
const store = createStore(player)

// map edux state to component props
function mapStateToProps(state) {
  return {
    value: state.audio
  }
}

// Map Redux actions to component props
function mapDispatchToProps(dispatch) {
  return {
    onIncreaseClick: () => dispatch(increaseAction)
  }
}

// Connected Component
const App = connect(
  mapStateToProps,
  mapDispatchToProps
)(Table)