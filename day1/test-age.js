function canDrive(usr) {
    console.log('user is', usr.name);
    if (usr.age >= 16) {
        console.log('allow to drive');
    }
    else {
        console.log('dont allow to drive');
    }
}
var tom = {
    name: 'tom',
    age: 20,
};
canDrive(tom);
