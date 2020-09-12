import React from 'react'
import HomeWrapper from './style'

const Home = () => {
  return (
    <HomeWrapper className='cl'>
      <div className='main fl'>
        <div className='list-container'>
          <ul className='note-list'>
            <li className='note'>
              <a className='wrap-img ri' href="#">
                <img src="https://upload-images.jianshu.io/upload_images/7190121-750d12d141de3e5c.JPEG?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240"></img>
              </a>
              <div className='contert'>
                <a className='title' href="#">this is title</a>
                <p></p>
                <div className='meta'>
                  <span className='jsd-meta'>52.2</span>
                  <a href="#">花落花开</a>
                  <a href="#">200</a>
                  <span>600</span>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div className='aside ri'></div>
    </HomeWrapper>
  )
}

export default Home;