import UIkit from "uikit/dist/js/uikit.js";
import plugin from "uikit/dist/js/uikit-icons.js";
UIkit.use(plugin);

// re export for COVIDCast
window.UIkit = UIkit;
// define for covidcast at which base url it is embedded
window.DELPHI_COVIDCAST_PAGE = "/covidcast/";
