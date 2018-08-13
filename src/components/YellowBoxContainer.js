import React from 'react'
import styled from 'styled-components'
import itWasAllYellow from '../utils/allYellows'
import YellowBox from './YellowBox'

const Container = styled.div`
  grid-area: yellows;
  width: calc(100vw - 10px);
  height: calc(100% - 5px);
  display: grid;
  @media (max-width:700px) { grid-template: repeat(13, 1fr) / repeat(2, 1fr)};
  @media (min-width:700px) { grid-template: repeat(5, 1fr) / repeat(5, 1fr)};
  grid-auto-flow: column;
  grid-gap: 5px;
  margin-left: 5px
  `

const YellowBoxContainer = () => (
  <Container>
    {itWasAllYellow.map(yellow => <YellowBox name={yellow.name} hex={yellow.hex}/>)}
  </Container>
)

export default YellowBoxContainer