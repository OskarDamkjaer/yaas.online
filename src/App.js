import React, { Component } from 'react'
import YellowBoxContainer from './components/YellowBoxContainer'
import styled from 'styled-components'

class App extends Component {
  render () {
    return (
      <MainSeparator>
        <Header>Yellow as a Service</Header>
        <YellowBoxContainer/>
      </MainSeparator>
    )
  }
}

const Header = styled.div`
  grid-area: header;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  margin-bottom: 10px;
  text-decoration: underline;
  font-size: 3em;
`

const MainSeparator = styled.div`
  display: grid;
  grid-template-rows: 10vh 90vh;
  grid-template-areas: 
  "header" 
  "yellows"`

export default App
