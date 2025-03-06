import { IconType } from "react-icons"

type SingleInfoProps = {
    text:string,
    image:IconType
}

const SingleInfo:React.FC<SingleInfoProps> = ({text, image:Image}) => {
  return (
    <div className="flex gap-4 items-center justify-start">
        <Image className="text-3xl"/>
        <p>{text}</p>
    </div>
  )
}

export default SingleInfo