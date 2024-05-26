function classnames(...classes) {
    // Write your code here
    //console.log(classes,'classes')
    return classes.filter(Boolean).join(' ')
}

// If isActive is true and isError is false, 
// buttonClasses should be: 'btn btn-active'
const isActive =  true;
const isError = false
const buttonClasses = classnames(
    'btn',
    isActive && 'btn-active',
    isError && 'btn-error'
);

console.log(buttonClasses)