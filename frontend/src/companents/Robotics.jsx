import React, { useContext, useEffect, useState } from 'react'
import { useGetDataQuery } from '../app/Slices/robotSlices'
import { useNavigate } from 'react-router'
import { AiTwotoneLike } from "react-icons/ai";
import { FaInfoCircle } from 'react-icons/fa';
import { RobotContext } from '../context/FavoritesContext';

function Robotics() {
    let { data, refetch, isLoading } = useGetDataQuery()
    let { fav, setFav } = useContext(RobotContext)
    let [allData, setAllData] = useState([])
    let navigate = useNavigate()

    useEffect(() => {
        if (data) {
            setAllData(data)
        }
    }, [data])

    function handleSearch(inpValue) {
        if (inpValue.trim() == '') {
            setAllData(data)
        } else {
            let filter = data.filter((item) => item.name.toLowerCase().includes(inpValue.trim().toLowerCase()))
            setAllData(filter)
        }
    }

    function handleSort(sortValue) {
        let sortedValue = [...allData]

        switch (sortValue) {
            case "az":
                sortedValue.sort((a, b) => a.name.localeCompare(b.name))
                break;
            case "za":
                sortedValue.sort((a, b) => b.name.localeCompare(a.name))
                break;
            case "default":
                sortedValue = [...data]
                break;

            default:
                break;
        }
        setAllData(sortedValue)
    }
    function handleFav(item) {
        let find = fav.find((data) => data._id == item._id)
        if (find) {
            alert("Daha once elave olunub")
        } else {
            setFav([...fav, item])
        }
    }

    return (
        <>
            <div className='Robotics'>
                <div className="container">
                    <h1>Featured Robotics Products to Show</h1>
                    <span>Who are in extremely love with eco friendly system.</span>
                    <div className="sort-search">
                        <div className="search">
                            <input type="text" placeholder='Search ...' onChange={(e) => handleSearch(e.target.value)} />
                        </div>
                        <div className="sort">
                            <select onClick={(e) => handleSort(e.target.value)}>
                                <option value="default">Default</option>
                                <option value="az">A-Z</option>
                                <option value="za">Z-A</option>
                            </select>
                        </div>
                    </div>

                    <div className="card-wrapper">
                        {
                            isLoading ? (
                                <h1>...Loading</h1>
                            ) : (
                                allData.map((item) => (
                                    <div className="card" key={item._id}>
                                        <div className="image">
                                            <img src={item.img} alt="" />
                                        </div>
                                        <div className="detail">
                                            <h2>{item.name}</h2>
                                            <span>{item.desc}</span>
                                            <div className="btns" style={{ display: "flex", alignItems: "center", gap: "20px" }}>
                                                <button onClick={() => navigate(`/${item._id}`)}><FaInfoCircle /></button>
                                                <button onClick={() => handleFav(item)}><AiTwotoneLike /></button>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            )
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default Robotics
