interface TitleProps {
  text1: string;
  text2: string;
}

const Title = ({ text1, text2 }: TitleProps) => {
  return (
    <div className="inline-flex gap-2 items-center mb-3">
      <p className="text-blue-500 text-[20px]">
        {text1} <span className="text-blue-700 font-medium">{text2}</span>{" "}
      </p>
      <p className="w-8 sm:w-12 h-px sm:h-0.5 bg-blue-700"></p>
    </div>
  );
};

export default Title;
