import {Link} from "react-router-dom";

const Nav = () => {
    return (
        <div className='navBar'>
            <Link to='/'>Home</Link>
            <Link to='/puppy'>Puppy</Link>
            <Link to='/puppies'>All Puppies</Link>
        </div>
    )
}

export default Nav