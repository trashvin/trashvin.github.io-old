function fillData() {
    document.getElementById('main_title').innerHTML = main_title;
    document.getElementById('main_title_name').innerHTML=main_name;
    document.getElementById('main_sub_title').innerHTML= main_sub_title;
    
    document.getElementById('footer').innerHTML= footer_text;
    document.getElementById('about_content_1').innerHTML = about_content_1;
    document.getElementById('about_content_2').innerHTML = about_content_2;
    document.getElementById('skill_intro_1').innerHTML = skill_intro_1;
    document.getElementById('skills_footer').innerHTML = skills_footer;
    //document.getElementById('skill_intro_2').innerHTML = skill_intro_2;
    document.getElementById('project_intro_1').innerHTML = project_intro_1;
    document.getElementById('project_intro_2').innerHTML = project_intro_2;
    document.getElementById('contact_intro').innerHTML = contact_intro;
    document.getElementById('last_update').innerHTML = last_update;
    document.getElementById('footer_m').innerHTML= footer_text;
}
function myFunction() {
    var x = document.getElementById("topnav_id");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}