export const ColoredMessage = (props) => {
  //Propsを分割代入
  const { color, children } = props;

  //  CSSオブジェクト
  //  JSファイルのオブジェクトにハイフンは使えないため、CSSプロパティ名もキャメルになる
  const contentStyle = {
    //  color: color, //  分割代入(destructure)により、「props.」を省略
    //  更に、CSSプロパティ名と変数名が一致したため、省略可能
    color,
    fontSize: "20px" // 「font-size」ではなく、「fontSize」に注意
  };

  //  分割代入により、「props.」を省略
  return <p style={contentStyle}>{children}</p>;
};
