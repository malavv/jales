import './Footer.css';

function Footer(props) {
    return (
        <footer>
            <div className="Status">
                <div className="light" />
                <div className="viewtype">
                        <span active="true">json</span>
                        <span> | </span>
                        <span>gui</span>
                </div>
            </div>

            <div className="Context">
                <span>No Context Yet</span>
                <span>No Context Yet</span>
            </div>
        </footer>
    );
}

export default Footer