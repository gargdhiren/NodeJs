//grouping operation ()
//this is syntax of module wrapper function.

//this is not global so we can it in the file.
//node copies all our code and copies it in the module wrapper function.
//this signifies that the data is protected.
// this is module wrapper function now if i mention console.log statement outside the wrapper function so it will give an error as it gets out of scope of module wrapper function
(function (exports, require, module, __filename, __dirname) {
    const name="Dhiren";
    // console.log(name);
  })();
  console.log(name);
