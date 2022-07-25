export const showAuthor = (firstName, lastName) => {
    if(typeof lastName !== "undefined" && lastName){
        return firstName + " "  + lastName || " ";
    } else{
        return firstName;
    }
}