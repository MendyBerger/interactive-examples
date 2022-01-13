var url = "{%wasm-url%}";
WebAssembly.instantiateStreaming(fetch(url), { console }).then(
  (result) => {
    const multiply = result.instance.exports.multiply;

    console.log("10 * 3 = " + multiply(10, 3));
  }
);
