import Banner from "../../Components/Header/Banner/Banner";


const Home = () => {
    return (
        <div style={{
            backgroundImage: `url('/img/pexel-5.jpg')`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            backgroundColor: 'rgba(0, 0, 0, 0.2)',
        }}>
            <div>
            <Banner></Banner>
            </div>
            
        </div>
    );
};

export default Home;