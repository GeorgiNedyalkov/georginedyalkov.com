import { MdOutlineScreenSearchDesktop } from "react-icons/md";
import { BsDatabaseFillGear } from "react-icons/bs";
import { SiAltiumdesigner } from "react-icons/si";

import Skill from "./Skill/Skill";

import "./Skills.css";

const Skills = () => {
    return (
        <section id="skills">
            <h2>Skills</h2>
            <ul className="skills__list">
                {skills.map((skill) => (
                    <li key={skill.id}>
                        <Skill {...skill} />
                    </li>
                ))}
            </ul>
        </section>
    );
};

export default Skills;

const skills = [
    {
        id: "front-end",
        icon: <MdOutlineScreenSearchDesktop className="skill__icon" />,
        title: "Front-end",
        description:
            "Creating User Interfaces for full stack applications with an efficient, clean and simple design",
        technologies: [
            "HTML5",
            "CSS3",
            "JavaScript",
            "TypeScript",
            "React",
            "Next.js",
            "Unit testing",
        ],
    },
    {
        id: "back-end",
        icon: <BsDatabaseFillGear className="skill__icon" />,
        title: "Back-end",
        description:
            "Developing back-end software with authorisation, encryption and  REST API architecture following the MVC framework",
        technologies: [
            "NodeJS",
            "Express",
            "MongoDB",
            "Mongoose",
            "R.E.S.T API",
            "Git",
        ],
    },
    {
        id: "UX / UI",
        icon: <SiAltiumdesigner className="skill__icon" />,
        title: "UX / UI",
        description:
            "Focused on creating clean and simple designs that make the user experience seamless and enjoyable",
        technologies: ["Figma", "Escalidraw", "Wireframing"],
    },
];
