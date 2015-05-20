var TriangleClassifier = function() {

  this.classify = function(a,b,c) {
  //   if (a == b == c) {
  //     return "equilateral";
  // } else if (a == b !=c) {
  //     return "isoceles";
  // } else (a != b != c) {
      return "scalene";
  };
};

// if a != b != c 
//       return "scalene";
//     if a == b == c 
//       return "equilateral";
//     if a == b != c 
//       return "isoceles";
//     if a == 0
//       throw 'oh crap';
//   };