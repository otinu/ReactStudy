//Railsの命名規則のようなファイル名と関数名を規則に沿って関連付ける必要はない様子
//ファイル名は「Helloreact」、関数名は「HelloReact」 で動作確認

import { ColoredMessage } from "./components/ColoredMessage";

export const HelloReact = () => {
  const onClickButton = () => {
    alert();
  };

  //  return以降が複数行になる場合、()で囲う
  return (
    //  return以降は1つのタグで囲われている必要がある ⇒ 空タグなしではエラー発生
    //  空タグの場合、不要なDOMは生成されない。 状況に応じてdivタグなどで囲ってもOK
    <>
      <h1 style={{ color: "red" }}>Hello React!</h1>
      <ColoredMessage />
      <ColoredMessage color="blue" message="Feeling difficult but funny" />
      <ColoredMessage color="pink" message="Yes! I can do it!!" />
      <button onClick={onClickButton}>ボタン</button>
    </>
  );
};
