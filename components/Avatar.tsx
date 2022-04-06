import Image from "next/image";

type Props = {
    name: string;
    picture: string;
};

const Avatar = ({ name, picture }: Props) => {
    return (
        <div className="flex items-center flex-col">
            <Image
                src={picture}
                className="w-12 h-12 rounded-full"
                alt={name}
                width={50}
                height={50}
            />
            <div className="hidden lg:block text-xl ml-4 font-bold">{name}</div>
        </div>
    );
};

export default Avatar;
