import React, { useState } from 'react'

const Navbar = () => {
    const [show, setShow] = useState(false);

    const handleToggle = () => {
        let isElementPresent = document.querySelector('.show');
        if (isElementPresent) {
            isElementPresent.classList.remove('show')
        } else {
            let el = document.querySelector('.customNavBar');
            el.classList.add('show')
        }
    }

    return (
        <div id='navbar' >
            <nav class="innerNavBar sticky-top navbar navbar-expand-xl navbar-dark ">
                <div class="container-fluid">
                    <a class="navbar-brand" href="#">Navbar</a>
                    <button onClick={handleToggle} class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarDark" aria-controls="navbarDark" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse customNavBar" id="navbarDark">
                        <ul class="navbar-nav me-auto mb-2 mb-xl-0">
                        </ul>
                        <div class="d-flex">
                            <ul class="navbar-nav me-auto  mb-2 mb-xl-0">
                                <li class="nav-item ">
                                    <a class="nav-link" href="#about">About</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#projects">Projects</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#experience">Experience</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#education">Education</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        </div >
    )
}

export default Navbar
