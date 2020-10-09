import React from 'react';
import '../../scss/components/skills.scss'

export default () => {
    return(
        <div className="container skills">
            <div>
                <section>
                    <h3>FrontEnd</h3>
                </section>
                <section>
                    <h3>Back</h3>
                    <button>View</button>
                </section>
            </div>
            <div>
                <section>
                    <h3>BackEnd</h3>
                </section>
                <section>
                    <h3>Back</h3>
                    <button>View</button>
                </section>
            </div>
            <div className="card">
                <section className="front">
                    <h3>Mobile</h3>
                </section>
                <section className="back">
                    <h3>Back</h3>
                    <button>View</button>
                </section>
            </div>
        </div>
    )
}