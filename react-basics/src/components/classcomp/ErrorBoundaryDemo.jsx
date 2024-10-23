import React, { Component } from 'react'
import ErrorComp from '../functional/ErrorComp'
import ErrorBoundary from './ErrorBoundary'

export default class ErrorBoundaryDemo extends Component {
  render() {
    return (
      <div>
        <ErrorBoundary fallback="Invalid Name">
            <ErrorComp username="Joker"/>
        </ErrorBoundary>
        <ErrorBoundary fallback="something went wrong">
            <ErrorComp username="Joker"/>
        </ErrorBoundary>
            <ErrorComp username="Seema"/>
       
      </div>
    )
  }
}
