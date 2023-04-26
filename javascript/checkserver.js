(async () => {
  try {
    const response = await fetch(
      "https://benefitsgloballtd-backend.glitch.me",
      {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ message: "server is up and running" }),
      },
    );
    const result = await response.json();
    console.log(result);
    if (result.error) {
      console.log(result);
      // alert(result.errMessage);
    } else {
      console.log(result.message);
    }
  } catch (error) {
    // alert(error.message);
    console.log(error.message)
  }
})();
