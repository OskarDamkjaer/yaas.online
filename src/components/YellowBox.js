import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const Box = styled.div`
  background-color: ${props => props.hex};
  height: 100%;
  display: flex;
  flex-direction: column;
  font-size: 2em;
`

const TopDiv = styled.div`
  flex-grow: 1;
`

const BottomDiv = styled.div`
 `

const YellowBox = ({hex, name}) => (
  <div>
    <Box hex={hex}>
      <TopDiv>{name}</TopDiv>
      <BottomDiv>{hex}</BottomDiv>
    </Box>
  </div>
)

YellowBox.propTypes = {
  hex: PropTypes.string,
  name: PropTypes.string
}

export default YellowBox