import {useState, useEffect} from 'react'
import axios from 'axios'

const singlePuppy = () => {
    const [puppy, setPuppy] = useState([]);

    useEffect(() => {
        const fetchAllPuppers = async() => {
            const {data} = await axios.get('https://fsa-puppy-bowl.herokuapp.com/api/2307-FTB-ET-WEB-FT/players');
            setPuppy(data.data.players);
        }
        fetchAllPuppers();
    },[])

    return (
        <div>
            <h2>Pupper List</h2>
                <div className='pupper'>
                    {
                        puppy.map((pup) => {
                            return (
                                <div key={pup.name}>
                                    {pup.name}
                                </div>
                            )
                        })
                    }
                </div>
        </div>
    )
}

export default singlePuppy