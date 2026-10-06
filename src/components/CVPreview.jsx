function CVPreview({ details, experiences, educations }) {
    return (
        <>
            <header className="cv-header">
                <h1>{details.fullName}</h1>

                <div className="cv-contact">
                    <p>{details.email}</p>
                    <p>{details.phone}</p>
                </div>
            </header>

            <section className="cv-section">
                <h2>Education</h2>

                {educations.map((education) => (
                    <div className="cv-item" key={education.id}>
                        <div className="cv-item-header">
                            <p className="cv-item-title">
                                {education.schoolName}
                            </p>

                            <p className="cv-item-date">
                                {education.dateOfStudy}
                            </p>
                        </div>

                        <p className="cv-item-subtitle">
                            {education.titleOfStudy}
                        </p>
                    </div>
                ))}
            </section>

            {experiences.length > 0 && (
                <section className="cv-section">
                    <h2>Experience</h2>

                    {experiences.map((experience) => (
                        <div className="cv-item" key={experience.id}>
                            <div className="cv-item-header">
                                <p className="cv-item-title">
                                    {experience.companyName}
                                </p>

                                <p className="cv-item-date">
                                    {experience.dateFrom} - {experience.dateUntil}
                                </p>
                            </div>

                            <p className="cv-item-subtitle">
                                {experience.positionTitle}
                            </p>

                            <p className="cv-item-description">
                                {experience.responsibilities}
                            </p>
                        </div>
                    ))}
                </section>
            )}
        </>
    );
}

export default CVPreview;