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
                className={"h-60 w-auto mx-auto"}
            />
        </div>
    );
};

export default CoverImage;
