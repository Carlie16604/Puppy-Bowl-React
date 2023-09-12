import {useState, useEffect} from 'react';
import axios from 'axios';

const AllPuppies = () => {  
    const [allPuppies, setAllPuppies] = useState([]);

  useEffect(() => {
    const fetchAllPuppies = async() => {
      const {data} = await axios.get('https://fsa-puppy-bowl.herokuapp.com/api/2307-FTB-ET-WEB-FT/players');
      console.log(data);
      setAllPuppies(data);
    }
    fetchAllPuppies();
  },[])

  return (
    <div>
        <h1>All Puppy Players</h1>
        {
            allPuppies.map((pup) => {
                return (
                    <div key={pup.id}>
                        {pup.name}
                    </div>
                )
            })
            
        }
    </div>
  )
}

export default AllPuppies