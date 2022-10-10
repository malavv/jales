import './Header.css';

export default function Header({filename}) {
    return (
        <header className="app-header">
            <div>{filename} - Jales viewer</div>
        </header>
    );
}