export const ColoredMessage = (props) => {
  console.log(props);
  //  CSSオブジェクト
  //  JSファイルのオブジェクトにハイフンは使えないため、CSSプロパティ名もキャメルになる
  const contentStyle = {
    color: props.color,
    fontSize: "20px" // 「font-size」ではなく、「fontSize」に注意
  };

  return <p style={contentStyle}>{props.message}</p>;
};
