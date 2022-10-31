(() => {
  const core = require("@actions/core");

  try {
    const file = require("./json");
  } catch (error) {
    core.setFailed(error.message);
  }
})();
