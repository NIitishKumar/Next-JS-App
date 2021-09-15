import { useRouter, useState, useEffect } from "next/dist/client/router"
import {Link} from 'next/link'

const profile = () => {

    // let [data,setData] = useState([])

    // useEffect( async () => {
    //     let data = await fetch('https://api.github.com/users/geerlingguy/repos?per_page=100&page=1').then(res => res.json()).then(data => setData(data))
    // }, [])

    const router = useRouter()
    const { slug } = router.query
    console.log(slug);

    // const a =data.filter(x => {
    //     x.id == slug
    // })
    // console.log(a);

    return  <>
            
                <div class="container">
                    <div class="card" style={{ width: '18rem' }}>
                        <div class="card-body">
                            <img class="card-img-top" src={`https://robohash.org/${slug}?set=set2&size=180x180`} alt="Card image cap"/>
                            {/* <h4 class="card-title">{x.name}</h4>
                            <h5>{data.email }</h5> */}
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href='/' class="btn btn-primary">Home </a>
                        </div>
                    </div>
                </div>
    
            </>
}


export default profile; 