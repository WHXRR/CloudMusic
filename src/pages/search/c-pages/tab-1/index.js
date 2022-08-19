import React, { memo } from 'react'

import { Row, Col, Spin } from 'antd';
import { MehTwoTone } from '@ant-design/icons'

import NormalSongStyle from '@/components/normal-song-style'

const Tab1 = memo((props) => {
  const { keyword, count, type, data, loading, onClick } = props
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
                    key={item.id}
                    xs={12} md={8} lg={6} xl={4}
                    onClick={() => onClick(item)}
                  >
                    <NormalSongStyle
                      {...item}
                      picUrl={item.picUrl || item.coverImgUrl}
                      singerName={
                        item.artists?.map(ele => ele.name).join('、')
                        ||
                        item.creator?.nickname
                        ||
                        item.dj?.nickname
                      }
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

export default Tab1