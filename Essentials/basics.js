var Role;
(function (Role) {
    Role[Role["admin"] = 0] = "admin";
    Role[Role["editor"] = 1] = "editor";
    Role[Role["viewer"] = 2] = "viewer";
})(Role || (Role = {}));
var userRole = Role.editor;
