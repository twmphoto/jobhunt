import React, { Component } from 'react';

const HeroHead = props => {
    return (
        <section className="hero is-info is-fullheight">
            <div className="hero-body">
                <div className="container">
                    <h1 className="title">
                        {props.title}
                    </h1>
                        <h2 className="subtitle">
                            {props.subtitle}
                        </h2>
                </div>
            </div>
        </section>
    );
}

export default HeroHead;