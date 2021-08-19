import React from 'react'
import './NewsList.css'
import {newsData} from '../../data'
import {useLocation} from 'react-router-dom'

const NewsList = () => {
  const {pathname} = useLocation()

  return (
    <div className="newslist-box-container">
      <div className="newslist-box-list">
        <ul>
          {
            newsData.map(news =>
              <li>
                <div className="news-and-time">
                  <ul>
                    <li>
                      <div className="newslist-box-text-left">{news.title}</div>
                    </li>
                    <li>
                      <div className="newslist-box-text-time">{news.time}</div>
                    </li>
                  </ul>

                </div>
                <div className="afterlist-line"/>
              </li>
            )
          }
        </ul>
      </div>
    </div>
  )
}

export default NewsList
