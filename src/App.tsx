/** @jsx jsx */
import React from 'react'
import { Global, css, jsx } from '@emotion/core'

import Bpm from './components/Bpm'
import { STYLE } from './constants'

const globalStyle = css`
  body {
    overflow: hidden;
    margin: 0;
    padding: 0;
    background-color: ${STYLE.COLOR.BACKGROUND};
  }
`

const appStyle = css`
  height: 100vh;
  width: 100vw;
`

const App: React.FC = () => {
  return (
    <div css={appStyle} className="App">
      <Global styles={globalStyle} />
      <Bpm />
    </div>
  )
}

export default App
