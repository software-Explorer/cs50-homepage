const software_info = ["Paint.NET is image and photo editing software for PCs that run Windows. It features an intuitive and innovative user interface with support for layers, unlimited undo, special effects, and a wide variety of useful and powerful tools. An active and growing online community provides friendly help, tutorials, and plugins.",
                        "Lazpaint: Free cross-platform image editor with raster and vector layers, written in Lazarus (Free Pascal). simple, useful, fast workflow",
                        "Tuxpaint: Free art software for kids of all ages. Magic, fun, creativity, no technality",
                        "Pivot Animator is designed to be a user friendly way of creating 2D stick-man and sprite animations. Makes storytelling accessible for anyone.",
                        "Tupitube is great for people new to 2d animation.It has great official tutorials and teaches traditional and  intutive animation style which is 'frame by frame animation'. My second favorite after Pivot Animator.",
                        "Bosca Ceoil is a free, easy to use tool for creating music!. Contains interactive tutorial with in itself. Best option for new to music production.",
                        "BeepBox is an online tool for sketching and sharing instrumental music. It is powerful than Bosca Ceoil but still intutive as it. ",
                        "No time to delve into the big and serious music apps PixiTracker is what you need! It is a simple and fun tool to quickly create musical sketches, chiptunes and sound experiments. Without requiring a lot of musical knowledge!",
                        "OpenShot is designed to be an easy to use, quick to learn, and surprisingly powerful video editor. It will lit your heart with good feeling",
                        "Windows movie maker is discontinued but it is really simple, useful, fast. You will understand power and usefulness of simplicity",
                        "Anim8or is simple and best. Easy 3d modeller and 3d animation software with beautiful user manual. If someone want to try 3d for first time it is the best option.",
                        "Seamless3d is one of the easiest 3D modelling & animation programs that offers artistic freedom. I love it after anim8or. It is unique so first we need to watch tutorial playlist created by the creator of a program himself on youtube."

];

let icon_src = [];

/*

let consNlinks = fread("./iconsLinksSoftware");

 let tempIconSrcHold = "";
 let tempSoftwareLinkHold = "";

 for char in consNlinks{
    if len(icon_src) < 11{
        if (char === "\n"){
            icon_src = icon_src + [tempIconSrcHold];
            tempIconSrcHold = '';
        }
        else{
            tempIconSrcHold = tempIconSrcHold + char;
        }
    }

    else{
        if (char === "\n"){
            software_links = software_links + [tempSoftwareLinkHold];
            tempSoftwareLinkHold = '';
        }
        else{
            tempSoftwareLinkHold = tempSoftwareLinkHold + char;
        }
    }
 }


 softybabies = document.querySelectorAll('.software');
 let timecount = 0;

 softybabies.addEventListener('hover', function(element){
        document.selectById('icon').innerHTML.src = tempIconSrcHold[index(element from parent)];
        document.selectById('shortDescription').innerHTML = software_info[index[element from parent]];
 }) */



/*fetch('iconsLinksSoftware.txt')
.then(response => response.text())
.then(data => {
    // Here, 'data' is the content of your text file
    console.log(data);
});*/


let iconsNlinksRead = "";
 fetch('iconsLinksSoftware.txt')
.then(response => response.text())
.then(data => {
    // Here, 'data' is the content of your text file
    iconsNlinksRead = data;
    //console.log(iconsNlinksRead);
    iconsNlinksRead = iconsNlinksRead.split("\n");
    iconsNlinksRead.pop();
    //console.log(iconsNlinksRead);
    icon_src = iconsNlinksRead.slice(0, 12);
    software_links = iconsNlinksRead.slice(12);
    //console.log(icon_src);
    //console.log(document.querySelectorAll('.software'));
});




document.addEventListener("DOMContentLoaded", function(){
                let icon_photo;
                let shortDescription;
                let softwares = document.querySelectorAll('.software');
                let software_title = document.getElementById('title');




                for (i of softwares) {
                    i.addEventListener('mouseover',
                        function(event){
                            icon_photo = document.getElementById('icon');
                            shortDescription = document.getElementById('shortDescription');
                            /*softwares = Array.from(softwares);*/
                            icon_photo.src = icon_src[Array.from(softwares).indexOf(event.currentTarget)];
                            /*console.log(icon_photo.src);*/
                            shortDescription.innerHTML = software_info[Array.from(softwares).indexOf(event.currentTarget) ];
                            /* console.log(document.querySelector('a'));*/
                            /*Title name of a software */

                            software_title.innerText = event.currentTarget.textContent;




                        })}


                /*if click we can go to softwares website */

                for (i of softwares){
                    i.addEventListener('click',
                        function(event){
                            window.open(software_links[Array.from(softwares).indexOf(event.currentTarget)], "_blank");
                        }
                    );
                }


                /*navigation to rest of our website*/
                let we_are = document.getElementById("we_are");
                let three_d_cube = document.getElementById("three_d_cube");
                let tic_tac_toe = document.getElementById("tic_tac_toe");

                we_are.addEventListener('click', function(){
                    window.location.href = "./abtar_pahari.html";
                });


                three_d_cube.addEventListener('click', function(){
                    window.location.href = "./3d_cube/index.html";
                });

                tic_tac_toe.addEventListener('click', function(){
                    window.location.href = "./tic_tac_toe/tic_tac_toe.html", "_blank";
                });

              });



