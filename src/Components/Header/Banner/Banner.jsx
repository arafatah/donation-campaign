
const Banner = () => {
    return (
        <div style={{ fontFamily: "'Inter', sans-serif" }}>
            <div className="hero min-h-screen" style={{ backgroundImage: 'url(https://i.ibb.co/6bSsJPX/pexels-5.jpg)' }}>
                <div className="hero-overlay bg-opacity-80"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="">
                        <h1 className="mb-5 text-5xl font-bold text-white">I Grow By Helping People In Need</h1>
                        <input className="py-4 px-8 rounded-s-md" type="text" placeholder="Search here..." />
                        <button className=" py-4 px-5 rounded md:rounded-e-xl bg-red-700 text-white">Search</button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Banner;