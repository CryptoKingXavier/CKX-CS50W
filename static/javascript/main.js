$(document).ready(() => {

    const CONSTRAINTS = ['#intro', '#html-css', '#git', '#python', '#django', '#sql', '#jscript', '#ui-ux', '#ci-cd', '#scal-sec']
    
    CONSTRAINTS.forEach((div) => $(`${div}`).hide());

    CONSTRAINTS.forEach((div) => {
        $(`${div}-card`).click(() => $(`${div}`).slideToggle(5000));
    });

});