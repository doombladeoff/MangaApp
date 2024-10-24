import { Fragment } from "react";
import ContentLoader, { Rect } from "react-content-loader/native";

const Placeholder = ({ number }) => {
  return (
    <ContentLoader width={470} height={205}>
      {Array.from(Array(number)).map((_, idx) => (
        <Fragment key={idx}>
          <Rect height={160} width={110} rx={5} x={120 * idx} y={0} />
          <Rect height={10} width={110} rx={5} x={120 * idx} y={170} />
        </Fragment>
      ))}
    </ContentLoader>
  );
};

export default Placeholder;
