/* eslint-disable react/prefer-stateless-function */

import React from 'react'

const Button = props => React.createElement('button', props, props.children)

/* eslint-disable no-unused-vars */
const UnexportComponent = ({ children }) => <div>{children}</div>
/* eslint-enable no-unused-vars */

export class ClassComponent extends React.Component {
  render() {
    return <div>{this.props.children}</div>
  }
}

export const ArrowFunctionalComponent = ({ children }) => (
  <div>{children}</div>
)

export function FunctionalComponent({ children }) {
  return <p>{children}</p>
}

export const ComposedComponent = ({ children }) => <Button>{children}</Button>

export const ComponentWithAttrs = ({ children }) => (
  <div data-test="testme">{children}</div>
)

export default ({ children }) => <div>{children}</div>
