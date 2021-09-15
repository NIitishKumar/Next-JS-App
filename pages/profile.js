import { useEffect, useState } from "react";
import Link from 'next/link'
const Profile = () => {
    
    let [data,setData] = useState([])

    useEffect( async () => {
        let data = await fetch('https://api.github.com/users/geerlingguy/repos?per_page=100&page=1').then(res => res.json()).then(data => setData(data))
    }, [])
    

    return <>
        
            <div class="container">
                    <div class="row">
                        {data ? data.map(x => (
                            <>
                                <div class="col-sm">
                                    <div class="card" style={{ width: '18rem' }}>
                                        <div class="card-body">
                                            <img class="card-img-top" src={`https://robohash.org/${x.id}?set=set2&size=180x180`} alt="Card image cap"/>
                                            <h4 class="card-title">{x.name}</h4>
                                            <h5>{x.email }</h5>
                                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                            {console.log(x.id)}
                                            <Link href={`profile/${x.id}`} ><a  class="btn btn-primary">See Profile </a></Link>
                                        </div>
                                    </div>
                                </div>  
                            </>
                        )) : <p>Loading...</p>}
                    </div>
            </div>
        
        </>
}

export default Profile