
const Banner = () => {
    return (
        <div style={{ fontFamily: "'Inter', sans-serif" }}>
            <p className="text-center font-bold text-5xl ">I Grow By Helping People In Need</p>
            <form action="" className="flex items-center justify-center mt-4">
                <input className="py-4 px-5" type="text" />
                <button className="py-4 px-5 rounded-e-xl bg-red-700 text-white">Search</button>
            </form>

        </div>
    );
};

export default Banner;