import PhotoType from "@/types/PhotoType"
import { url } from "inspector";
type Props = {
    url: string;
    openModal: (url: string) => void;
}
const Photo = (props: Props) => {
    return (
        <div className="cursor-pointer"
            onClick={() => props.openModal(props.url)}>
            <img src={`assets/${props.url}`}
                alt="foto"
                className="h-48 w-full object-cover object-center md:h-60 xl:h-80" />
        </div>
    )
}

export default Photo