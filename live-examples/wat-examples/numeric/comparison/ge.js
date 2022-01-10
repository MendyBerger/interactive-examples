var url = "{%wasm-url%}";
WebAssembly.instantiateStreaming(fetch(url), { console }).then(
  (result) => {
    const greater_or_equal_2 = result.instance.exports.greater_or_equal_2;

    console.log("1 is greater than or equal to 2: " + !!greater_or_equal_2(1));
    console.log("2 is greater than or equal to 2: " + !!greater_or_equal_2(2));
    console.log("3 is greater than or equal to 2: " + !!greater_or_equal_2(3));
  }
);
