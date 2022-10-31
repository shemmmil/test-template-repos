(() => {
  const core = require("@actions/core");

  try {
    const file = require("./json");
  } catch (err) {
    core.setFailed(error.message);
  }
})();
