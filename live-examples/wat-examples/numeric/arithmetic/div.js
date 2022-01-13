var url = "{%wasm-url%}";
WebAssembly.instantiateStreaming(fetch(url), { console }).then(
  (result) => {
    const divide = result.instance.exports.divide;

    console.log("12 / 3 = " + divide(12, 3));
  }
);
