var url = "{%wasm-url%}";
WebAssembly.instantiateStreaming(fetch(url), { console }).then(
  (result) => {
    const add = result.instance.exports.add;

    console.log("10 + 3 = " + add(10, 3));
  }
);
