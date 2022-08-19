import React, { memo } from 'react'

import { TabStyle } from './style'

import { Spin } from 'antd';
import { MehTwoTone } from '@ant-design/icons'

import { formatMinuteSecond } from '@/utils/format-utils.js'

const Tab2 = memo((props) => {
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
            <TabStyle>
              {
                data?.map(item => (
                  <div className='item' onClick={() => onClick(item)} key={item.id}>

                    {item.name && <div>{item.name}</div>}
                    {item.nickname &&
                      <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                        <img src={item.avatarUrl} alt={item.nickname} style={{ width: 40, height: 40 }} />
                        <div style={{ lineHeight: '25px' }}>
                          <div>{item.nickname}</div>
                          <div style={{ color: '#666' }}>{item.signature}</div>
                        </div>
                      </div>
                    }

                    {item.ar && <div>{item.ar?.map(ele => ele.name).join('、')}</div>}
                    {item.followeds && <div></div>}

                    {item.al && <div>《{item.al?.name}》</div>}
                    {item.playlistCount && <div>歌单：{item.playlistCount}</div>}

                    {item.dt && <div>{formatMinuteSecond(item.dt)}</div>}
                    {item.followeds && <div>粉丝：{item.followeds}</div>}
                  </div>
                ))
              }
            </TabStyle>
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

export default Tab2