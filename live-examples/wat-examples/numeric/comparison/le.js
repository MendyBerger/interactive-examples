var url = "{%wasm-url%}";
WebAssembly.instantiateStreaming(fetch(url), { console }).then(
  (result) => {
    const less_or_equal_2 = result.instance.exports.less_or_equal_2;

    console.log("1 is less than or equal to 2: " + !!less_or_equal_2(1));
    console.log("2 is less than or equal to 2: " + !!less_or_equal_2(2));
    console.log("3 is less than or equal to 2: " + !!less_or_equal_2(3));
  }
);
