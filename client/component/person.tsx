const Home = () => {
    const handleClick = () => {
        console.log('person button click');
    }
    return (
        <>
            <div>person</div>
            <button onClick={handleClick}>PersonButton</button>
        </>
    )
}
export default Home