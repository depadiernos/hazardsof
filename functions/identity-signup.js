

exports.handler = async function(event, context) {
 console.log("Signup from invite detected")
  return {
    statusCode: 200,
    body: JSON.stringify({ message: "Signup from invite detected"})
   }
  }
};
