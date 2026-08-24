let role = "admin";

switch (role) {
    case "admin":
        console.log("You are an admin");
        break;
    case "editor":
        console.log("You are an editor");
        break;
    default:
        console.log("You are a user");
        break;
}

if (role === "admin") {
    console.log("You are an admin");
} else if (role === "editor") {
    console.log("You are an editor");
} else {
    console.log("You are a user");
}
