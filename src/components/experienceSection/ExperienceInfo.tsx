type ExperienceInfoProps = {
    number: string;
    text: string
}

const ExperienceInfo: React.FC<ExperienceInfoProps> = ({ number, text }) => {
    return (
        <div className="flex flex-col justify-center items-center">
            <p className="font-bold text-6xl text-cyan">{number}</p>
            <p className="font-bold text-xl text-light-grey uppercase mt-4">{text}</p>
        </div>
    )
}

export default ExperienceInfo