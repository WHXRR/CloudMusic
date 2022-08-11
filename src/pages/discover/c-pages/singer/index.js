import React, { memo, useEffect, useState } from 'react'

import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { getSingerListAction } from './store/actionCreators'

import { Col, Row, Divider, Popover } from 'antd'
import { SmileOutlined } from '@ant-design/icons'

import {
  SingerStyle,
  HoverStyle
} from './style'
import { NavLink } from 'react-router-dom'

const areaList = [
  {
    label: '全部',
    value: -1
  },
  {
    label: '华语',
    value: 7
  },
  {
    label: '欧美',
    value: 96
  },
  {
    label: '日本',
    value: 8
  },
  {
    label: '韩国',
    value: 16
  },
  {
    label: '其他',
    value: 0
  },
]
const typeList = [
  {
    label: '全部',
    value: -1
  },
  {
    label: '男歌手',
    value: 1
  },
  {
    label: '女歌手',
    value: 2
  },
  {
    label: '乐队',
    value: 3
  },
]
const indexList = []
for (var i = 0; i < 26; i++) {
  indexList.push({
    label: String.fromCharCode((65 + i)),
    value: String.fromCharCode((65 + i)).toLowerCase()
  })
}
indexList.unshift({
  label: '热门',
  value: -1
})

const content = (data) => (
  <div>
    <HoverStyle>
      <img src={data.picUrl} alt={data.name} />
      {
        data.alias.length ? (
          <div className='name'>{data.alias.join('; ')}</div>
        ) : (
          <div className='name'>{data.name}</div>
        )
      }
      
    </HoverStyle>
  </div>
)

const Singer = memo(() => {

  const dispatch = useDispatch()
  const [currentArea, setArea] = useState(-1)
  const [currentType, setType] = useState(-1)
  const [currentIndex, setIndex] = useState(-1)

  const { list } = useSelector(
    state => ({
      list: state.getIn(['singer', 'list'])
    }),
    shallowEqual
  )

  useEffect(() => {
    dispatch(getSingerListAction(currentArea, currentType, currentIndex))
  }, [currentArea, currentType, currentIndex, dispatch])


  return (
    <SingerStyle>
      <div className='top'>
        <div className='cate-item'>
          <div className='cate-title'>地区</div>
          <div className='cate-content'>
            {
              areaList.map((item, idx) => (
                <div
                  className={'item ' + (item.value === currentArea ? 'selected' : '')}
                  key={idx}
                  onClick={() => setArea(item.value)}
                >
                  {item.label}
                </div>
              ))
            }
          </div>
        </div>
        <div className='cate-item'>
          <div className='cate-title'>类别</div>
          <div className='cate-content'>
            {
              typeList.map((item, idx) => (
                <div
                  className={'item ' + (item.value === currentType ? 'selected' : '')}
                  key={idx}
                  onClick={() => setType(item.value)}
                >
                  {item.label}
                </div>
              ))
            }
          </div>
        </div>
        <div className='cate-item'>
          <div className='cate-title'>索引</div>
          <div className='cate-content'>
            {
              indexList.map((item, idx) => (
                <div
                  className={'item ' + (item.value === currentIndex ? 'selected' : '')}
                  key={idx}
                  onClick={() => setIndex(item.value)}
                >
                  {item.label}
                </div>
              ))
            }
          </div>
        </div>
      </div>
      <Divider />
      <Row gutter={[20, 20]}>
        {
          list.map((item, idx) => (
            <Col key={item.id} xs={12} sm={8} md={4}>
              <Popover content={() => content(item)} overlayClassName='singer-item-hover'>
                <NavLink to={`/discover/singerdetails/${item.id}`} className='singer-item'>
                  {
                    idx <= 11 && (<img src={item.picUrl} alt={item.name} />)
                  }
                  <div className='singer-name'>
                    {item.name}
                    {
                      item.followed && <SmileOutlined style={{ color: '#00badb', paddingLeft: '5px' }} />
                    }
                  </div>
                </NavLink>
              </Popover>
            </Col>
          ))
        }
      </Row>
      <Divider />
    </SingerStyle>
  )
})

export default Singer