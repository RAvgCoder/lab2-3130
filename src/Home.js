import Links from "./links";
import {useEffect} from "react";

function Home({setCount}) {
    const nav_links = ["About", "Contact"];

    useEffect(() => {
        setCount(p => p + 1);
    },[setCount]);

    return (
        <div className="Home">
            <h1>Home</h1>
            <nav>
                <Links nav_links={nav_links}/>
            </nav>
            <p>Banner No: B00928317</p>
        </div>
    );
}

export default Home;