import {useState, useEffect, Route, Routes} from "react"
import axios from "axios"
import {Link, useParams} from 'react-router-dom'


const AllPuppies = () => {  
    const [allPuppies, setAllPuppies] = useState([]);
    
    useEffect(() => {
        const fetchAllPuppies = async() => {
            const {data} = await axios.get('https://fsa-puppy-bowl.herokuapp.com/api/2307-FTB-ET-WEB-FT/players');
            setAllPuppies(data.data.players);
        }
        fetchAllPuppies();
    },[])

    const Pup = ({singlePup}) => {
        const params = useParams();
        const id = params.id;
        const pup = singlePup.find( pup => pup.id === id);
            return (
                <div>
                    <li>
                        {pup.status}
                    </li>
                </div>
            );
        };

    const details = () => {
        console.log(setAllPuppies,ids);
    };

  return (
    <div>
        <h2>All Puppy Players</h2>
        <div className='puppies'>
        {
            allPuppies.map((pup) => {
                return (
                    <div key={pup.id}>
                        <Link to={`/puppies/${pup.name}`}>{pup.name}</Link>
                        <p>{pup.id === hash ? pup.breed: null}</p>
                    </div>
                    )
            })
            
        }
        <Routes>
            <Route path='/puppies/:id' element={<Pup singlePup={allPuppies}/>} />
        </Routes>
        <button className='puppiesButton' onClick={details}>See Details</button>  
        </div>
    </div>
  )
}

export default AllPuppies

{/*const ids = ()=> {
        const params = useParams();
        const id = params.id;
            return (
                <h1>Detail for</h1>
            )
    }
console.log(ids)}*/}