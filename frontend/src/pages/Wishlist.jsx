import React, { useContext } from 'react'
import { Helmet } from "react-helmet";
import { RobotContext } from '../context/FavoritesContext';
import { useGetDataQuery } from '../app/Slices/robotSlices';
import { AiTwotoneDislike } from 'react-icons/ai';
import { data, NavLink } from 'react-router';
function Wishlist() {
  let { fav, setFav } = useContext(RobotContext)
  let {refetch,isLoading} = useGetDataQuery()

  function handleDelete(item) {
    let filter = fav.filter((data) => data._id != item._id)
    setFav(filter)
  }
  return (
    <>
      <Helmet>
        <link rel="icon" type="image/svg+xml" href="https://is.gd/iQ6OMn" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Wishlist</title>
      </Helmet>
      <div className="Wishlist">
        <div className="container">
          <h1>Robotics Wishlist</h1>
          <div className="card-wrapper">
            {
              isLoading ? (
                <h1>...Loading</h1>
              ) : fav.length > 0 ? (
                fav.map((item) => (
                  <div className="card" key={item._id}>
                    <div className="image">
                      <img src={item.img} alt="" />
                    </div>
                    <div className="detail">
                      <h2>{item.name}</h2>
                      <span>{item.desc}</span>
                      <button onClick={() => handleDelete(item)}><AiTwotoneDislike /></button>
                    </div>
                  </div>
                ))
              ) : (
                <button style={{padding:"10px",border:"1px solid #959bff"}}><NavLink to={"/"} style={{color:"black"}}>Go Back</NavLink></button>
              )
            }
          </div>
        </div>
      </div>
    </>
  )
}

export default Wishlist
