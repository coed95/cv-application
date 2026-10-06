import { useState } from 'react';

function Experience({
    experience,
    handleExperienceChange,
    removeExperience
}) {
    const [isEditing, setIsEditing] = useState(true);

    return (
        <section>
            <h2>Experience</h2>

            {isEditing ? (
                <>
                    <label htmlFor={`companyName-${experience.id}`}>
                        Company name:
                    </label>
                    <input
                        id={`companyName-${experience.id}`}
                        type="text"
                        name="companyName"
                        value={experience.companyName}
                        onChange={(event) =>
                            handleExperienceChange(experience.id, event)
                        }
                    />

                    <label htmlFor={`positionTitle-${experience.id}`}>
                        Position title:
                    </label>
                    <input
                        id={`positionTitle-${experience.id}`}
                        type="text"
                        name="positionTitle"
                        value={experience.positionTitle}
                        onChange={(event) =>
                            handleExperienceChange(experience.id, event)
                        }
                    />

                    <label htmlFor={`responsibilities-${experience.id}`}>
                        Responsibilities:
                    </label>
                    <textarea
                        id={`responsibilities-${experience.id}`}
                        name="responsibilities"
                        value={experience.responsibilities}
                        onChange={(event) =>
                            handleExperienceChange(experience.id, event)
                        }
                    />

                    <label htmlFor={`dateFrom-${experience.id}`}>
                        Date from:
                    </label>
                    <input
                        id={`dateFrom-${experience.id}`}
                        type="date"
                        name="dateFrom"
                        value={experience.dateFrom}
                        onChange={(event) =>
                            handleExperienceChange(experience.id, event)
                        }
                    />

                    <label htmlFor={`dateUntil-${experience.id}`}>
                        Date until:
                    </label>
                    <input
                        id={`dateUntil-${experience.id}`}
                        type="date"
                        name="dateUntil"
                        value={experience.dateUntil}
                        onChange={(event) =>
                            handleExperienceChange(experience.id, event)
                        }
                    />

                    <div className="cv-item-buttons">
                        <button onClick={() => setIsEditing(false)}>
                            Submit
                        </button>

                        <button onClick={() => removeExperience(experience.id)}>
                            Remove
                        </button>
                    </div>
                </>
            ) : (
                <>
                    <p>{experience.companyName}</p>
                    <p>{experience.positionTitle}</p>
                    <p>{experience.responsibilities}</p>
                    <p>{experience.dateFrom}</p>
                    <p>{experience.dateUntil}</p>

                    <button onClick={() => setIsEditing(true)}>
                        Edit
                    </button>
                </>
            )}
        </section>
    );
}

export default Experience;