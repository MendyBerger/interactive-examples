var url = "{%wasm-url%}";
WebAssembly.instantiateStreaming(fetch(url), { console }).then(
  (result) => {
    const not_2 = result.instance.exports.not_2;

    console.log("1 is not equal to 2: " + !!not_2(1));
    console.log("2 is not equal to 2: " + !!not_2(2));
    console.log("3 is not equal to 2: " + !!not_2(3));
  }
);
