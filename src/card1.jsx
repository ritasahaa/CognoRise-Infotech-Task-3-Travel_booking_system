import image1 from "../public/Images/img3.jpg";

export default function Card1() {
  return (
    <>
      <div className="flex flex-col  justify-between items-center px-10 ">
        <div className="flex  justify-between items-center ">
          <div className=" w-1/2 ">
            <img src={image1} className="h-56 absolute rounded-md" />
            <img
              src={image1}
              className="h-56 relative left-[400px] top-10 rounded-md"
            />
          </div>
          <div className="w-1/3">
            <p>
              Contrary to popular belief, Lorem Ipsum is not simply random text.
              It has roots in a piece of classical Latin literature from 45 BC,
              making it over 2000 years old. Richard McClintock, a Latin
              professor at Hampden-Sydney College in Virginia, looked up one of
              the more obscure Latin words, consectetur, from a Lorem Ipsum
              passage, and going through the cites of the word in classical
              literature, discovered the undoubtable source. Lorem Ipsum comes
              from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et
              Malorum" (The Extremes of Good and Evil) by Cicero, written in 45
              BC. This book is a treatise on the theory of ethics, very popular
              during the Renaissance. The first line of Lorem Ipsum, "Lorem
              ipsum dolor sit amet..", comes from a line in section 1.10.32.
            </p>
          </div>
        </div>
        <div className="flex space-x-20 items-center  mt-32 ">
          <div className="w-1/3">
            <p>
              Contrary to popular belief, Lorem Ipsum is not simply random text.
              It has roots in a piece of classical Latin literature from 45 BC,
              making it over 2000 years old. Richard McClintock, a Latin
              professor at Hampden-Sydney College in Virginia, looked up one of
              the more obscure Latin words, consectetur, from a Lorem Ipsum
              passage, and going through the cites of the word in classical
              literature, discovered the undoubtable source. Lorem Ipsum comes
              from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et
              Malorum" (The Extremes of Good and Evil) by Cicero, written in 45
              BC. This book is a treatise on the theory of ethics, very popular
              during the Renaissance. The first line of Lorem Ipsum, "Lorem
              ipsum dolor sit amet..", comes from a line in section 1.10.32.
            </p>
          </div>
          <div className=" w-1/2">
            <img src={image1} className="h-56 w-80 absolute rounded-md" />
            <img
              src={image1}
              className="h-56 w-80 relative left-96 top-10 rounded-md"
            />
          </div>
        </div>
      </div>
    </>
  );
}
