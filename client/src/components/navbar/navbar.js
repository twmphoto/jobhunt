import React from 'react';

const Navbar = () => {
    return (
        <nav class="navbar" role="navigation" aria-label="main navigation">
            <div class="navbar-brand container">
                <a class="navbar-item" href="https://bulma.io">
                <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28" alt="a logo"/>
                </a>
        </div>
            <div class="navbar-end">
            <div class="navbar-item">
                <a class="button is-primary">
                    <strong>Add a Job</strong>
                </a>
            </div>
            </div>
        </nav>
    );
}
        
export default Navbar;