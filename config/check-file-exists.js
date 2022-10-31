(() => {
  const core = require("@actions/core");

  try {
    const file = require("../scripts/deployment/deployentaddresses.json");
  } catch (error) {
    core.setFailed(error.message);
  }
})();
