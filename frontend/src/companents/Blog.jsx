import React from 'react'

function Blog() {
  return (
    <div className='Blog'>
      <div className="container">
        <h1>Latest News from our Blog</h1>
        <span>Who are in extremely love with eco friendly system.</span>
        <div className="card-wrapper">
            <div className="card">
                <div className="image">
                    <img src="https://preview.colorlib.com/theme/robotics/img/b1.jpg" alt="" />
                </div>
                <div className="text">
                    <div className="btns">
                        <button>Travel</button>
                        <button>Life Style</button>
                    </div>
                    <h3>Portable latest Fashion for young women</h3>
                    <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore.</span>
                    <p>31st January, 2018</p>
                </div>
            </div>
            <div className="card">
                <div className="image">
                    <img src="https://preview.colorlib.com/theme/robotics/img/b2.jpg" alt="" />
                </div>
                <div className="text">
                    <div className="btns">
                        <button>Travel</button>
                        <button>Life Style</button>
                    </div>
                    <h3>Portable latest Fashion for young women</h3>
                    <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore.</span>
                    <p>31st January, 2018</p>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Blog
