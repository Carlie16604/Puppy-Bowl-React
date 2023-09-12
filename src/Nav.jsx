import {Link} from "react-router-dom";

const Nav = () => {
    return (
        <div>
            <Link to='/'>Home</Link>
            <Link to='/Puppy'>Puppy</Link>
            <Link to='/Puppies'>All Puppies</Link>
        </div>
    )
}

export default Nav