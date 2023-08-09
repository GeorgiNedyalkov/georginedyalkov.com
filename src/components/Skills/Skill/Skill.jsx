const Skill = ({ icon, title, description, technologies }) => {
    return (
        <article className="skill">
            <div className="skill__header">
                <div className="skill__top">
                    {icon}
                    <h3 className="skill__title">{title}</h3>
                </div>
                <p className="skill__description">{description}</p>
            </div>
            <ul className="skill__technologies_list">
                <h4 className="skill__technologies_title">Tools</h4>
                {technologies.map((technology) => (
                    <li className="skill__technology" key={technology}>
                        {technology}
                    </li>
                ))}
            </ul>
        </article>
    );
};

export default Skill;
