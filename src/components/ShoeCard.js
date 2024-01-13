import React from "react";

const ShoeCard = ({ imgUrl, changeBigShoeImage, bigShoeImage }) => {
  const handleclick = () => {
    if (bigShoeImage !== imgUrl.bigShoeImage) {
      changeBigShoeImage(imgUrl.bigShoe);
    }
  };
  return (
    <div
      className={`border-1 rounded-xl ${
        bigShoeImage === imgUrl.bigShoe ? "bg-gray-400" : "border-transparent"
      }
     cursor-pointer max-sm:flex-1
    `}
      onClick={handleclick}
    >
      <div className="flex  justify-center items-center bg-card bg-center bg-cover sm:h-40 rounded-xl max-sm:p-4">
        <img  src={imgUrl.thumbnail} alt="thubnail"
        width={127}
        height={103}
        className="object-contain"  
        />
      </div>
    </div>
  );
};

export default ShoeCard;
