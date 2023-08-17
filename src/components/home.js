import './home.scss'
import letterF from '../assets/images/f.png'

const Home = () => {
    return (
        <>
            <div className="container home-page">
                <div className='text-zone'>
                    <h1>Hi, <br /> I'm
                    <img src={letterF} alt="f"/>
                    lorence,
                    <br/>
                    Software Engineer
                    </h1> 
                    <h2>CS student @ UCLA, eager to solve real-world problems with technology</h2>
                </div>
            </div>
        </>
    )
}

export default Home