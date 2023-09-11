import React from 'react';
import { Link } from 'react-router-dom';


export function Menu() {
    return (
        <>
            <nav class="navbar navbar-expand-lg bg-body-tertiary bg-warning">
                <div class="container bg-warning">
                    <h3 class="navbar-brand text-success" >FLOPKART</h3>
                    
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav ms-auto">
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="/">Product</a>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link" to="/table">ProductDetails</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
}