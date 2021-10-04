import React from 'react'
import { STATS_GET } from '../../api'
import useFetch from '../../Hooks/useFetch'
import Loading from '../../Fragments/Loading/Loading'
const StatsGraph = React.lazy(() => import ('../StatsGraph/StatsGraph'))

const UserStatus = () => {

    const {data, error, loading, request} = useFetch()
    React.useEffect(() => {
        async function getData(){
            const {url, options} = STATS_GET()
            await request(url, options)
        }
        getData()
    }, [request])

    if (loading) return <Loading />
    if (error) return <p>{error}</p>
    if (data)
    return (
        <React.Suspense fallback={<p>nada</p>} 
    >
            <div style={{padding: '0 4rem'}}>
               <h1>Estatísticas</h1>
                <StatsGraph data={data} /> 
            </div>
            
        </React.Suspense>
    )
    else return null
}

export default UserStatus