

buf1 = new Buffer(256);
buf1.fill(0);
buf1.write("mi texto");
console.log(buf1.toString());

//buffer.write(string,
  //  [offset], [length],
    //[encoding])
   // Writes length number of bytes from the
    //string starting at the offset index inside
    //the buffer using encoding.

buf1.write("escribie más",10,13);
console.log(buf1.toString());

buf1[20]=43;
console.log(buf1.toString());