module.exports = {
  index,
  signup,
  login,
};

function index(req, res) {
  res.render("admin/index", { title: "Admin Portal" });
}

function signup(req, res) {
  res.render("admin/signup", { title: "New Admin Registration" });
}

// function login(req, res) {
//   res.render("admin/login", { title: "Admin Login" });
// }

function login(req, res) {
  res.render("admin/login");
}
