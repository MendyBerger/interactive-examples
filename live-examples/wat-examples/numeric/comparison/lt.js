var url = "{%wasm-url%}";
WebAssembly.instantiateStreaming(fetch(url), { console }).then(
  (result) => {
    const less_than_2 = result.instance.exports.less_than_2;

    console.log("1 is less than 2: " + !!less_than_2(1));
    console.log("2 is less than 2: " + !!less_than_2(2));
    console.log("3 is less than 2: " + !!less_than_2(3));
  }
);
