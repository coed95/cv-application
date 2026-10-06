import { useState } from 'react'
import './App.css'
import CVPreview from './components/CVPreview.jsx'
import Details from './components/Details.jsx'
import Education from './components/Education.jsx'
import Experience from './components/Experience.jsx'

function App() {
    const [details, setDetails] = useState({
        fullName: "",
        email: "",
        phone: "",
    });

    const [educations, setEducations] = useState([
        {
            id: crypto.randomUUID(),
            schoolName: "",
            titleOfStudy: "",
            dateOfStudy: "",
        },
    ]);

    const [experiences, setExperiences] = useState([
        {
            id: crypto.randomUUID(),
            companyName: "",
            positionTitle: "",
            responsibilities: "",
            dateFrom: "",
            dateUntil: "",
        },
    ]);

    function handleDetailsChange(event) {
        setDetails(prev => {
          return {
            ...prev,
            [event.target.name]: event.target.value,
          };
        })
    }

    function handleEducationChange(id, event) {
        setEducations(prev => {
            return prev.map(education => {
                if (education.id === id) {
                    return {
                        ...education,
                        [event.target.name]: event.target.value,
                    };
                } else {
                    return education;
                }
            });
        });
    }

    function handleExperienceChange(id, event) {
        setExperiences(prev => {
            return prev.map(experience => {
                if (experience.id === id) {
                    return {
                        ...experience,
                        [event.target.name]: event.target.value,
                    }
                } else {
                    return experience;
                }
            })
        });
    }

    function addExperience() {
        setExperiences(prev => {
            return [
                ...prev,
                {
                    id: crypto.randomUUID(),
                    companyName: "",
                    positionTitle: "",
                    responsibilities: "",
                    dateFrom: "",
                    dateUntil: "",
                },
            ];
        });
    }

    function removeExperience(id) {
        setExperiences(prev => {
            return prev.filter(experience => experience.id !== id);
        });
    }

    function addEducation() {
        setEducations(prev => {
            return [
                ...prev,
                {
                    id: crypto.randomUUID(),
                    schoolName: "",
                    titleOfStudy: "",
                    dateOfStudy: "",
                },
            ];
        });
    }

    function removeEducation(id) {
        setEducations(prev => {
            return prev.filter(education => education.id !== id);
        });
    }

    return (
        <main className="app">
            <div className="editor">
                <Details
                    details={details}
                    handleDetailsChange={handleDetailsChange}
                />

                {educations.map((education) => (
                    <Education
                        key={education.id}
                        education={education}
                        handleEducationChange={handleEducationChange}
                        removeEducation={removeEducation}
                    />
                ))}

                <button onClick={addEducation}>
                    Add education
                </button>

                {experiences.map(experience => (
                    <Experience
                        key={experience.id}
                        experience={experience}
                        handleExperienceChange={handleExperienceChange}
                        removeExperience={removeExperience}
                    />
                ))}

                <button onClick={addExperience}>
                    Add experience
                </button>
            </div>

            <div className="preview">
                <CVPreview
                    details={details}
                    experiences={experiences}
                    educations={educations}
                />
            </div>
        </main>
      )
}

export default App;