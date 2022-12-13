// 数字の入力
function num_click(val){
  if((result.value == "0" && val == "0") || (result.value == "0" && val == "00")){
    result.value = "0";
  }else if(result.value == "0"){
    result.value = val;
  }else {
    result.value += val;
  }
}

// 演算子の入力
function ope_click(val){
  if(is_ope_last()){
    result.value = result.value.slice(0, -1) + val;
  } else {
    result.value += val;
  }
}

// 計算結果
function equal_click(){
  if(is_ope_last()) {
    result.value = result.value.slice(0, -1);
  };
  result.value = new Function("return " + result.value)();
}

// 最後の文字が演算子かどうか
function is_ope_last(){
  return ["+", "-", "*", "/", "."].includes(result.value.slice(-1));
}

// 初期化
function AC_click(){
  result.value = 0;
}