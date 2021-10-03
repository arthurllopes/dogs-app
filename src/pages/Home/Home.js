import React from 'react'
import Feed from '../../Components/Feed/Feed'
import Head from '../../Components/Head/Head'

const Home = () => {
    return (
        <div style={{paddingTop:"4rem"}}>
            <Head title="Fotos" description="Home page" />
            <Feed />
        </div>
    )
}

export default Home
