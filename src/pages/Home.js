
const Home = ({ name, title }) => {
    return <div>
        <section className="splash">
            <section>
            <img src="https://apeachcc.github.io/Bootstrap-Portfolio/images/image-finn.jpeg"/>
            </section>
            <section>
                <h1>My name is {name}</h1>
                <p>Title: {title}</p>
            </section>
        </section>
    </div>
}

export default Home;

