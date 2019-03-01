import React, { useState } from 'react'
import styled from 'styled-components'
import { VideoPlayer } from '@livepeer/chroma'
import LoadingOverlay from '../../components/LoadingOverlay'
import BasicNavbar from '../../components/BasicNavbar'
import CostChart from './cost-chart'

export default ({ maxWidth = '100%', aspectRatio = '16:9' }) => {
  const [live, setLive] = useState()
  const [currentTime, setCurrentTime] = useState(0)

  return (
    <div>
      <BasicNavbar />
      <DemoBox>
        <StatsPane>
          <CostChart currentTime={currentTime} />
        </StatsPane>
        <Media maxWidth={maxWidth}>
          <LoadingOverlay live={live} />
          <VideoPlayer
            autoPlay={true}
            onTimeUpdate={e => setCurrentTime(e.target.currentTime)}
            hlsOptions={{ debug: false }}
            poster=""
            src="http://multiplatform-f.akamaihd.net/i/multi/will/bunny/big_buck_bunny_,640x360_400,640x360_700,640x360_1000,950x540_1500,.f4v.csmil/master.m3u8"
            aspectRatio={aspectRatio}
            onLive={() => setLive(true)}
            onDead={() => setLive(false)}
          />
        </Media>
      </DemoBox>
    </div>
  )
}

const DemoBox = styled.div`
  display: flex;
`

const StatsPane = styled.div`
  flex-basis: 0px;
  flex-grow: 1;
  color: white;
  padding: 20px;
`

const Media = styled.div`
  position: relative;
  flex-grow: 2;
  flex-basis: 0px;
  display: block;
  width: 100%;
  max-width: ${({ maxWidth }) => (maxWidth ? maxWidth : '100%')};
  background: #000;
  overflow: hidden;
`
