var url = "{%wasm-url%}";
WebAssembly.instantiateStreaming(fetch(url), { console }).then(
  (result) => {
    const remainder = result.instance.exports.remainder;

    console.log("The remainder of 10 mod 3 is: " + remainder(10, 3));
  }
);
