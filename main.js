// 課題: console.logで出力される数の順番を答える

console.log(1);

setTimeout(() => {
  setTimeout(() => {
    console.log(2);
  }, 0);
  console.log(3);
}, 100);

console.log(4);

setTimeout(() => {
  setTimeout(() => {
    console.log(5);
  }, 40);
  console.log(6);
}, 50);

console.log(7);

// 以下にconsole.logで出力される数をコメントで記述してください。(解答後の答えはこのmain.jsを実行して確認してください。)
// 例: 出力順は、「1, 7, 2, 6, 3, 5, 4」
// 答え: 出力順は「1, 4, 7, 5, 6, 2, 3」
// 正解: 出力順は「1, 4, 7, 6, 5, 3, 2」

// なぜ間違えたか
// 　setTimeout(() => {
//  　setTimeout(() => {
//    　console.log(5);
//  　}, 40);
//  　console.log(6);
//　}, 50);
//　コードの順番的に、最初のSetTimeout...(40)の処理が終わりキューからスタックに移行、console.log(5)が出力された後にconsole.log(6)
//　が出力されると思いましたが、実際はsetTimeout...(40)の処理がキューに移行した後すぐconsole.log(6)は別でスタックに積まれて出力される
// という認識で良いでしょうか？
// 「2, 3」の出力順の逆転も同じ理由で間違えました。