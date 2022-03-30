import React from 'react';
import {Link} from 'react-router-dom';

function Header() {
    return (
        <header>
            Amigo Secreto
            <nav>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/amigos/convidar">Convidar amigo</Link></li>
                <li><Link to="/amigos/todos">Ver amigos</Link></li>
            </nav>
        </header>
    );
}

export default Header;