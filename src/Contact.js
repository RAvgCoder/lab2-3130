import Links from "./links";

function Contact({count}) {
    const nav_links = ["Home", "About"];

    return (
        <div className={"Contact"}>
            <h1>Contact</h1>
            <nav><Links nav_links={nav_links}/></nav>
            <p>Welcome to the Contact Page</p>
            <p>The home page was visited {count} times </p>
        </div>
    )
}

export default Contact;