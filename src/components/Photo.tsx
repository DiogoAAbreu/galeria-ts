import PhotoType from "@/types/PhotoType"

const Photo = (props: PhotoType) => {
    return (
        <div className="cursor-pointer">
            <img src={`assets/${props.url}`}
                alt="foto"
                className="h-48 w-full object-cover object-center md:h-60 xl:h-80" />
        </div>
    )
}

export default Photo