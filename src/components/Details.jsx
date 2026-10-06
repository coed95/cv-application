import { useState } from 'react';

function Details({ details, handleDetailsChange }) {
    const [isEditing, setIsEditing] = useState(true);

    return (
        <section>
            <h2>Personal Details</h2>

            {isEditing ? (
                <>
                    <label htmlFor="fullName">Full name:</label>
                    <input
                        id="fullName"
                        type="text"
                        name="fullName"
                        value={details.fullName}
                        onChange={handleDetailsChange}
                    />

                    <label htmlFor="email">Email:</label>
                    <input
                        id="email"
                        type="email"
                        name="email"
                        value={details.email}
                        onChange={handleDetailsChange}
                    />

                    <label htmlFor="phone">Phone:</label>
                    <input
                        id="phone"
                        type="tel"
                        name="phone"
                        value={details.phone}
                        onChange={handleDetailsChange}
                    />

                    <button onClick={() => setIsEditing(false)}>
                        Submit
                    </button>
                </>
            ) : (
                <>
                    <p>{details.fullName}</p>
                    <p>{details.email}</p>
                    <p>{details.phone}</p>

                    <button onClick={() => setIsEditing(true)}>
                        Edit
                    </button>
                </>
            )}
        </section>
    );
}

export default Details;