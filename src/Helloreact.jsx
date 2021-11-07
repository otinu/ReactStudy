//Railsの命名規則のようなファイル名と関数名を規則に沿って関連付ける必要はない様子
//ファイル名は「Helloreact」、関数名は「HelloReact」 で動作確認

import { useState } from "react";
import { ColoredMessage } from "./components/ColoredMessage";

export const HelloReact = () => {
  const [num, setNum] = useState(0);

  const onClickButton = () => {
    // setNum(num + 1);
    setNum((prev) => prev + 1); //厳密には、こちらの書き方の方が結合度が低くて良い
  };

  //  return以降が複数行になる場合、()で囲う
  return (
    //  return以降は1つのタグで囲われている必要がある ⇒ 空タグなしではエラー発生
    //  空タグの場合、不要なDOMは生成されない。 状況に応じてdivタグなどで囲ってもOK
    <>
      <h1 style={{ color: "red" }}>Hello React!</h1>
      <ColoredMessage color="blue">Feeling difficult but funny</ColoredMessage>
      <ColoredMessage color="pink">Yes! I can do it!!</ColoredMessage>
      <button onClick={onClickButton}>ボタン</button>
      <p>{num}</p>
    </>
  );
};
