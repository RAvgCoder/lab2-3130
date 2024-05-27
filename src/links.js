import {useNavigate} from "react-router-dom";

function Links({nav_links}) {
    const navigate = useNavigate();

    return (
        <div>
            <ul>
                {nav_links.map(page => (
                    <li key={page} onClick={() => navigate(`/${page.toLowerCase()}`)}>
                        {page}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Links;