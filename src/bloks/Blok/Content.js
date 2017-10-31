import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import { Grid, Line, Link, Text } from '../../../index'
import '../../blok.css'

const Content = (props) => {
  const {
    color,
    divide,
    kicker,
    padded,
    text,
    title
  } = props
  var blokContentClass = cx ({
    'blok-content': true,
    'blok-content-padded': padded
  })
  var blokContentTitleClass = cx ({
    'blok-content-title': true
  })
  var blokContentKickerClass = cx ({
    'blok-content-kicker': true
  })
  var blokContentTextClass = cx ({
    'blok-content-text': true
  })
  if (divide) {
    var divider = <Line small />
  }
  const textData = text.map((data, key) =>
    <Text
      key={key}
      text={data.text}
      className={blokContentTextClass}
      font='body'
      size='text'
      tag='p'
    />
  )
  return (
    <Grid color={color} className={blokContentClass}>
      <Grid.Row>
        <Grid.Column width={8} textAlign='middle'>
          <Text font='heading' size='h1' text={props.title} className={blokContentTitleClass} />
          <Text font='fancy' size='h4' tag='h4' text={props.kicker} className={blokContentKickerClass} />
          {divider}
          {textData}
        </Grid.Column>
      </Grid.Row>
    </Grid>
  )
}

Content.propTypes = {
  color: PropTypes.string,
  divide: PropTypes.bool,
  kicker: PropTypes.string,
  padded: PropTypes.bool,
  text: PropTypes.array,
  title: PropTypes.string
}

export default Content