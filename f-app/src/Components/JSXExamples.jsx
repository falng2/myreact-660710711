import React from "react";

function JSXExamples() {

    const greeting = <h1>Hello fellow haxxer</h1>
    const name = 'Haxer';
    const age = 69;

    const currentYear = new Date().getFullYear();

    const user = {
        firstName: 'Thanaset',
        lastName: 'Yimprasert',
        age: 20,
        hobbies: ['Sleeping', 'Eating', 'Sitting']
    };

    const formatName = (user) => {
        return `${user.firstName} ${user.lastName}`;
    };

    const isLoggedIn = true;
    const hasNotification = 3;
    return (
        <div className="jxs-example">
            <h1>JSX Example</h1>

            <section>
                <h2>eee</h2>
                (greeting)
                <p>name (name) age (age) years</p>
                <p>this year is (currentYear)</p>
                <p>Name (formatName(user))</p>
            </section>

            <section>
                <h2>Hello</h2>
                

            </section>

        </div>
    );
}