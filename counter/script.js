// DOM要素の取得
const counterValueEl = $('#counter-value');
const incrementBtn = $('#increment-btn');
const decrementBtn = $('#decrement-btn');

// 状態（カウント数）の保持
let count = 0;

// 表示を更新する関数
function updateDisplay() {
  counterValueEl.text(count);
}

// 増やすボタンがクリックされたときの処理
incrementBtn.on('click', () => {
  count++;
  updateDisplay();
});

// 減らすボタンがクリックされたときの処理
decrementBtn.on('click', () => {
  count--;
  updateDisplay();
});