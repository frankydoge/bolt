import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import { Grid, Link, Text } from '../../../index'
import '../../blok.css'

const Header = (props) => {
  const {
    color,
    link,
    linkRef,
    raised,
    title,
    transparent
  } = props
  var blokHeaderClass = cx ({
    'blok-header': true,
    'transparent': transparent
  })
  var blokHeaderLinkClass = cx ({
    'blok-header-link': true
  })
  const linkData = link.map((data, key) =>
    <Link
      key={key}
      text={data.text}
      linkRef={data.linkRef}
      active={data.active}
    />
  )
  return (
    <Grid color={color} raised={raised} className={blokHeaderClass}>
      <Grid.Row>
        <Grid.Column width={2} textAlign='middle' className={blokHeaderLinkClass}>
          <Link size='h3' font='heading' text={props.title} linkRef={linkRef} active />
        </Grid.Column>
        <Grid.Column width={6} textAlign='right' className={blokHeaderLinkClass}>
          {linkData}
        </Grid.Column>
      </Grid.Row>
    </Grid>
  )
}

Header.propTypes = {
  color: PropTypes.string,
  link: PropTypes.array,
  linkRef: PropTypes.string,
  raised: PropTypes.bool,
  title: PropTypes.string,
  transparent: PropTypes.bool
}

Header.defaultProps = {
  color: 'white',
  linkRef: '/',
  title: 'Title'
}

export default Header