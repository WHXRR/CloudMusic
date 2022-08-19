import React, { memo } from 'react'

import MVStyle from '@/components/mv-style'

import { getSingerMvUrl } from '@/service/singer'
import { getVideoURL } from '@/service/search'

import { Row, Col, Spin } from 'antd';
import { MehTwoTone } from '@ant-design/icons'

const Tab3 = memo((props) => {
  const { keyword, count, type, data, loading } = props

  const onClick = async data => {
    let res = {}
    if (data.type === 0) {
      res = await getSingerMvUrl(data.vid)
      window.open(res.data.url, '_black')
    } else {
      res = await getVideoURL(data.vid)
      window.open(res.urls[0].url, '_black')
    }
  }

  return (
    <div>
      {
        loading ? (
          <div className='empty'>
            <Spin />
          </div>
        ) : (
          <>
            <div className='tips'>
              搜索 <span className='primary font-bold'>{keyword}</span> , 找到 <span className='primary font-bold'>{count}</span> {type}...
            </div>
            <Row gutter={[50, 40]}>
              {
                data?.map(item => (
                  <Col
                    key={item.vid}
                    xs={24} md={12} lg={8} xl={6} xxl={4}
                    onClick={() => onClick(item)}
                  >
                    <MVStyle
                      {...item}
                      imgurl={item.coverUrl}
                      name={item.title}
                      artistName={item.creator?.map(ele => ele.userName).join('、')}
                    />
                  </Col>
                ))
              }
            </Row>
            {
              !data && (
                <div className='empty'>
                  <MehTwoTone twoToneColor='#00badb' style={{ marginRight: 10 }} />
                  <span>很抱歉，未能找到相关搜索结果！</span>
                </div>
              )
            }
          </>
        )
      }
    </div>
  )
})

export default Tab3