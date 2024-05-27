import Links from "./links";

function About({count}) {
    const nav_links = ["Home", "Contact"];
    return (
        <div className={"About"}>
            <h1>About</h1>
            <nav><Links nav_links={nav_links}/></nav>
            <p>Welcome to the About Page</p>
            <p>The home page was visited {count} times</p>
        </div>
    )
}

export default About;