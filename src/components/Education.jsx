import { useState } from 'react';

function Education({
    education,
    handleEducationChange,
    removeEducation
}) {
    const [isEditing, setIsEditing] = useState(true);

    return (
        <section>
            <h2>Education</h2>

            {isEditing ? (
                <>
                    <label htmlFor={`schoolName-${education.id}`}>School name:</label>
                    <input
                        id={`schoolName-${education.id}`}
                        type="text"
                        name="schoolName"
                        value={education.schoolName}
                        onChange={(event) =>
                            handleEducationChange(education.id, event)
                        }
                    />

                    <label htmlFor={`titleOfStudy-${education.id}`}>Title of study:</label>
                    <input
                        id={`titleOfStudy-${education.id}`}
                        type="text"
                        name="titleOfStudy"
                        value={education.titleOfStudy}
                        onChange={(event) =>
                            handleEducationChange(education.id, event)
                        }
                    />

                    <label htmlFor={`dateOfStudy-${education.id}`}>Date of study:</label>
                    <input
                        id={`dateOfStudy-${education.id}`}
                        type="date"
                        name="dateOfStudy"
                        value={education.dateOfStudy}
                        onChange={(event) =>
                            handleEducationChange(education.id, event)
                        }
                    />

                    <div className="cv-item-buttons">
                        <button onClick={() => setIsEditing(false)}>
                            Submit
                        </button>

                        <button onClick={() => removeEducation(education.id)}>
                            Remove
                        </button>
                    </div>
                </>
            ) : (
                <>
                    <p>{education.schoolName}</p>
                    <p>{education.titleOfStudy}</p>
                    <p>{education.dateOfStudy}</p>

                    <div className="cv-item-buttons">
                        <button onClick={() => setIsEditing(true)}>
                            Edit
                        </button>

                        <button onClick={() => removeEducation(education.id)}>
                            Remove
                        </button>
                    </div>
                </>
            )}
        </section>
    );
}

export default Education;