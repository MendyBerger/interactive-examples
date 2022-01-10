var url = "{%wasm-url%}";
WebAssembly.instantiateStreaming(fetch(url), { console }).then(
  (result) => {
    const is_2 = result.instance.exports.is_2;

    console.log("1 is equal to 2: " + !!is_2(1));
    console.log("2 is equal to 2: " + !!is_2(2));
    console.log("3 is equal to 2: " + !!is_2(3));
  }
);
