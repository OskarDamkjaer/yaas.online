import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const Box = styled.div`
  background-color: ${props => props.hex};
  width: 300px;
  height: 140px;
  `

const YellowBox = ({hex, name}) => (
  <div>
    <Box hex={hex}>
      {name}
    </Box>
  </div>
)

YellowBox.propTypes = {
  hex: PropTypes.string,
  name: PropTypes.string
}

export default YellowBox