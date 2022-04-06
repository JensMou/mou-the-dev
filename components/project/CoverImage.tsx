import Image from "next/image";

type Props = {
    title: string;
    src: string;
    slug?: string;
};

const CoverImage = ({ title, src, slug }: Props) => {
    return (
        <div className="w-full">
            <Image
                src={src}
                alt={`Cover Image for ${title}`}
                width={640}
                height={511}
            />
        </div>
    );
};

export default CoverImage;
