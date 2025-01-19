import React from 'react'
import { Helmet } from 'react-helmet'
import { useGetDataByIdQuery } from '../app/Slices/robotSlices'
import { useNavigate, useParams } from 'react-router'

function Detail() {
    let { id } = useParams()
    let { data, isLoading } = useGetDataByIdQuery(id)
    let navigate = useNavigate()
    return (
        <>
            <Helmet>
                <link rel="icon" type="image/svg+xml" href="/vite.svg" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <title>Detail</title>
            </Helmet>
            <div className="Detail">
                <h1>Robot Detail</h1>
                {
                    isLoading ? (
                        <h1>...Loading</h1>
                    ) : (
                        <div className="card">
                            <div className="image">
                                <img src={data.img} alt="" />
                            </div>
                            <div className="detail">
                                <h2>{data.name}</h2>
                                <span>{data.desc}</span>
                                <button onClick={() => navigate(`/`)}> Go Back</button>
                            </div>
                        </div>
                    )
                }
            </div>
        </>
    )
}

export default Detail
