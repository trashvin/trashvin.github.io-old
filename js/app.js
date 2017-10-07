function fillData() {
    document.getElementById('main_title').innerHTML = main_title;
    document.getElementById('main_title_name').innerHTML=main_name;
    document.getElementById('main_sub_title').innerHTML= main_sub_title;
    document.getElementById('footer').innerHTML= footer_text;
    document.getElementById('about_content_1').innerHTML = about_content_1;
    document.getElementById('about_content_2').innerHTML = about_content_2;
    document.getElementById('skill_intro_1').innerHTML = skill_intro_1;
    //document.getElementById('skills_footer').innerHTML = skills_footer;
    document.getElementById('project_intro_1').innerHTML = project_intro_1;
    document.getElementById('project_intro_2').innerHTML = project_intro_2;
    document.getElementById('contact_intro').innerHTML = contact_intro;
    document.getElementById('last_update').innerHTML = last_update;
    document.getElementById('footer_m').innerHTML= footer_text;

    var line = document.createElement("br");
    for(var skill in skills) {
        var top_div = document.createElement("div");
        var top_title = document.createElement('span');
        top_title.style = "font-weight:bold";
        top_title.innerHTML = skills[skill] + '<br/>';
        top_div.style ="background:whitesmoke";
        top_div.id = skill;
        top_div.appendChild(top_title);
        //top_div.appendChild(line);
        
        document.getElementById('skills_list').appendChild(top_div);

        var sub_skills = skill_list[skill];
        if (sub_skills != null) {
            for(var key in sub_skills) {
                
                var main = document.createElement("span");
                var inner = document.createElement("span");
                main.className='label';
                main.innerHTML = key;
                inner.className='tooltiptext';
                if ( sub_skills[key] == 0) {
                    inner.innerHTML = "Ongoing study/training"
                    main.appendChild(inner);
                } else if( sub_skills[key]> 0){
                    inner.innerHTML= sub_skills[key].toString() + " year/s";
                    main.appendChild(inner);
                } else {

                }
                top_div.appendChild(main);        
            }
        }        
    }
    var footer = document.createElement('span');
    footer.innerHTML = skills_footer;
    document.getElementById('skills_list').appendChild(line);
    document.getElementById('skills_list').appendChild(footer);
    
    
}

function myFunction() {
    var x = document.getElementById("topnav_id");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}