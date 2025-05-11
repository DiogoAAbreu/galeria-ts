import { PhotoProps } from "@/types/Photo";


const Photo = ({ url, openModal }: PhotoProps) => {
    return (
        <div className="cursor-pointer"
            onClick={() => openModal(url)}>
            <img src={`assets/${url}`}
                alt="foto"
                className="h-48 w-full object-cover object-center md:h-60 xl:h-80" />
        </div>
    )
}

export default Photo