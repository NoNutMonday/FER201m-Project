import React from 'react'
import '../styles/Footer.css'

function Footer() {
    return (
        <footer className="bg-body-tertiary">
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <h5>About RentFinder</h5>
                        <p>RentFinder is a website that helps people find houses or rooms for long-term rent. Our goal is to make the process of finding a place to live as easy and stress-free as possible.</p>
                    </div>
                    <div className="col-md-3">
                        <h5>Quick Links</h5>
                        <ul className="list-unstyled">
                            <li><a href="/about">About Us</a></li>
                            <li><a href="/contact">Contact Us</a></li>
                            <li><a href="/faq">FAQ</a></li>
                        </ul>
                    </div>
                    <div className="col-md-3">
                        <h5>Follow Us</h5>
                        <ul className="list-unstyled">
                            <li><a href="<URL>">Facebook</a></li>
                            <li><a href="<URL>">Twitter</a></li>
                            <li><a href="<URL>">Instagram</a></li>
                        </ul>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12 text-center">
                        <p>© 2022 RentFinder. All rights reserved.</p>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
