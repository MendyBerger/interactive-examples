var url = "{%wasm-url%}";
WebAssembly.instantiateStreaming(fetch(url), { console }).then(
  (result) => {
    const subtract = result.instance.exports.subtract;

    console.log("10 - 3 = " + subtract(10, 3));
  }
);
