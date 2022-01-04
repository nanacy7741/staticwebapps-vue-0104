module.exports = async function(content, req) {
  content.res = {
    body: {
      text: "Hello from the API 20220104"
    }
  };
};
