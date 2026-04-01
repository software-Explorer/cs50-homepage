
document.addEventListener('DOMContentLoaded', function(){
        let progress_bar = document.getElementById('progress_bar');
        let width_increment = 5;
        const softwares = document.querySelectorAll('.software');
        const _100percent = 100;
        let progress_bar_width = 0;
        let setTimeout_ID = 0;
        let setInterval_ID = 0;
        let software_links = [];
        let index_software_link = 0;



        // fetching software_links from linksNicon.txt
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

            software_links = iconsNlinksRead.slice(12);
            //console.log(icon_src);
            //console.log(document.querySelectorAll('.software'));
        });


        for (s of softwares){
            // animation starts fresh if hovered on any softwares.
            s.addEventListener('mouseover',function(event){
                index_software_link = software_links[Array.from(softwares).indexOf(event.currentTarget)];
                console.log(index_software_link);
                setTimeout_ID = setTimeout(setInterval_ID = setInterval(function() {progress_bar_animate(index_software_link)}, 1000), 1000); // starts the progress bar and ends it when it reaches end
                //setTimeout_ID = setTimeout(setInterval(progress_bar_animate, 1000), 1000); // starts the progress bar and ends it when it reaches end

            });

            // if mouse leave event progress bar will not appear
            s.addEventListener('mouseleave', function(event){
                clearTimeout(setTimeout_ID);
                clearInterval(setInterval_ID);
                console.log(progress_bar.style.width);
                console.log(progress_bar_width);
                progress_bar.style.width = "0%";
                console.log(progress_bar.style.width);
                progress_bar_width = 0;
                console.log(progress_bar_width);


            })
        }



        // function for starting and finishing and resetting progress_bar
        function progress_bar_animate(eventtt){
            if (progress_bar_width < _100percent){

                progress_bar.style.width = String(progress_bar_width + width_increment) + "%";
                progress_bar_width = parseInt(progress_bar.style.width);
            }
            else
            {
                window.open(eventtt, "_blank");
                progress_bar_width = 0;
                progress_bar.style.width = parseInt(progress_bar_width);
            }


            console.log(progress_bar.style.width);
        }
});

