import React, { memo, useState } from 'react'

import { FooterContent } from './style'
import {
  FrownFilled,
  MehFilled,
  SmileFilled,
  QqCircleFilled,
  RedditCircleFilled,
  HeartFilled
} from '@ant-design/icons';

const Footer = memo(() => {
  let [isSelected, changeSelected] = useState(false)
  const selected = (num) => {
    changeSelected(() => isSelected = num)
  }
  const unSelected = () => {
    changeSelected(() => false)
  }

  const arr = [
    {
      top: <SmileFilled className='icon-item item1' />,
      bottom: <FrownFilled className='icon-item item2' />
    },
    {
      top: <SmileFilled className='icon-item item1' />,
      bottom: <QqCircleFilled className='icon-item item2' />
    },
    {
      top: <SmileFilled className='icon-item item1' />,
      bottom: <RedditCircleFilled className='icon-item item2' />
    },
    {
      top: <SmileFilled className='icon-item item1' />,
      bottom: <HeartFilled className='icon-item item2' />
    },
    {
      top: <SmileFilled className='icon-item item1' />,
      bottom: <MehFilled className='icon-item item2' />
    },
  ]

  return (
    <FooterContent>
      {
        arr.map((item, idx) => (
          <div
            key={idx}
            className={'icon ' + (isSelected === idx ? 'selected' : 'un-selected')}
            onMouseEnter={() => selected(idx)}
            onMouseLeave={unSelected}
          >
            {item.top}
            {item.bottom}
          </div>
        ))
      }
    </FooterContent>
  )
})

export default Footer