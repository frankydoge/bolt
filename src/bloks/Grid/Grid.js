import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import Column from './Column'
import Container from './Container'
import Row from './Row'
import '../../blok.css'

const Grid = (props) => {
  const {
    textAlign,
    fluid
  } = props
  var rowClass = cx ({
    [`text-align-${textAlign}`]: textAlign,
    'display-fluid': fluid
  })
  return (
    <Container>
      <Row className={rowClass}>
        {props.children}
      </Row>
    </Container>
  )
}

Grid.defaultProps = {
  textAlign: 'left',
  fluid: false
}

Grid.propTypes = {
  textAlign: PropTypes.string,
  fluid: PropTypes.bool
}

export default Grid