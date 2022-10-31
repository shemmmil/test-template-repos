(() => {
  const core = require("@actions/core");
  const fs = require("fs");
  const file = "scripts/deployment/deployentaddresses.json";

  try {
    if (fs.existsSync(file)) {
      console.log("File is exists");
    }
  } catch (error) {
    core.setFailed(error.message);
  }
})();
