 const handler = async (event, context) {
  console.log("Signup from invite detected")
  return {
    statusCode: 200,
    body: { message: "Signup from invite detected"}
   }
  }
  
  module.exports = handler
