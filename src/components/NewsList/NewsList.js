import React from 'react'
import './NewsList.css'
import { news } from '../../data'
import { useLocation } from 'react-router-dom'

const NewsList = () => {
    const {pathname} = useLocation()

    const thispagetitile = news.filter(data => pathname.includes(data.page))
    
    return(
        <div className="newslist-box-container">
            <h4 className="newslist-box-text">{thispagetitile[0].title}</h4>
            <div className="newslist-box-list">
                <ul>
                    {
                        thispagetitile[0].nav.map(navItem =>
                            typeof (navItem.title1) === 'string' ?
                             <li>
                                <div className="news-and-time">
                                    <ul>
                                        <li>
                                            <div className="newslist-box-text-left">{navItem.title1}</div>
                                        </li>
                                        <li>
                                            <div className="newslist-box-text-time">{navItem.time1}</div>
                                        </li>
                                    </ul>

                                </div>
                                <div className="afterlist-line"/>
                             </li>

                             :<div> yes</div>
                        )
                    }
                </ul>
            </div>
        </div>
    )
}

export default NewsList