import Star from "../public/icons/star.svg";

type RatingStarsProps = {
    rating: number;
};

const RatingStars = ({ rating }: RatingStarsProps): React.ReactElement => {
    const numberOfStars = 6;
    return (
        <div className="flex">
            {[...Array(numberOfStars)].map((e, i) => {
                return (
                    <div key={i} className="w-10 mr-2 my-2">
                        <Star
                            key={i + "star"}
                            className={
                                rating >= i + 1
                                    ? "text-golden"
                                    : "text-lightgrey"
                            }
                        />
                    </div>
                );
            })}
        </div>
    );
};

export default RatingStars;
