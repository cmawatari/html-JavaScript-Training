// DOM要素の取得
const counterValueEl = document.getElementById('counter-value');
const incrementBtn = document.getElementById('increment-btn');
const decrementBtn = document.getElementById('decrement-btn');

// 状態（カウント数）の保持
let count = 0;

// 表示を更新する関数
function updateDisplay() {
  counterValueEl.textContent = count;
}

// 増やすボタンがクリックされたときの処理
incrementBtn.addEventListener('click', () => {
  count++;
  updateDisplay();
});

// 減らすボタンがクリックされたときの処理
decrementBtn.addEventListener('click', () => {
  count--;
  updateDisplay();
});