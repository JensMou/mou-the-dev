import cn from "classnames";
const Star = require("../public/icons/star.svg") as string;

type RatingStarsProps = {
    rating: number;
};

const RatingStars = ({ rating }: RatingStarsProps): React.ReactElement => {
    const numberOfStars = 6;
    return (
        <div className="flex">
            {[...Array(numberOfStars)].map((e, i) => {
                return (
                    <div
                        key={i}
                        className={cn([
                            "w-10 mr-2 my-2",
                            rating >= i + 1 ? "text-golden" : "text-lightgrey",
                        ])}
                    >
                        <Star key={i + "star"} />
                    </div>
                );
            })}
        </div>
    );
};

export default RatingStars;
