exports.validateNewUser = (user) => {
    if (!user.firstname) {
        return {status: "error",field: "firstname"};
    }
    if (!user.lastname) {
        return {status: "error",field: "lastname"};
    }
    return {status:"ok"};
}