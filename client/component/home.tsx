const Home = () => {
    const handleClick = () => {
        console.log('home button click');

    }
    return (
        <>
            home
            <button onClick={handleClick}>HomeButton</button>
        </>
    )
}
export default Home