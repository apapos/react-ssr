const Home = () => {
    const handleClick = () => {
        console.log('home button click');
    }
    return (
        <>
            <div>home</div>
            <button onClick={handleClick}>HomeButton</button>
        </>
    )
}
export default Home