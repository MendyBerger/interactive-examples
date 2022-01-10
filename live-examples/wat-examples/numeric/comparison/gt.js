var url = "{%wasm-url%}";
WebAssembly.instantiateStreaming(fetch(url), { console }).then(
  (result) => {
    const greater_than_2 = result.instance.exports.greater_than_2;

    console.log("1 is greater than 2: " + !!greater_than_2(1));
    console.log("2 is greater than 2: " + !!greater_than_2(2));
    console.log("3 is greater than 2: " + !!greater_than_2(3));
  }
);
