//initialize
const content = document.querySelector(".content");

//load content
for (let i = 0; i < 6 ; i++){
    let p = document.createElement("p");
        p.classList.add("content-para");
        p.innerHTML = `
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet iste fugiat aliquam est, distinctio possimus qui nostrum facere? Suscipit, impedit illo nostrum similique a ab ad laudantium quam hic ut cupiditate vero consectetur et, animi dolorum. Dolore recusandae numquam, officiis fuga repellendus neque ad vero sunt nemo similique, obcaecati, quo labore. Ea esse corporis assumenda sunt culpa eos maxime id nostrum, hic, unde excepturi aperiam debitis, voluptatibus rerum nesciunt ipsam quas odio! Fugiat accusamus esse perspiciatis, laboriosam exercitationem aliquam temporibus error illum. Fugiat error dolorum maxime ipsam, explicabo, saepe a quaerat adipisci, velit praesentium voluptas laborum officiis sunt recusandae omnis?
        `
        content.appendChild(p);
}

//get scroll values
const scroll = () => {
    const srollProgress = document.getElementById("progress");
    const srollProgressValue = document.getElementById("progress_value");

    //get heights and position
    let position = document.documentElement.scrollTop;
    let scrollHight, clientHeight;
    scrollHight = document.documentElement.scrollHeight;
    clientHeight = document.documentElement.clientHeight;

    let calHeight = scrollHight - clientHeight;
    let scrollValue = Math.round((position * 100) / calHeight);

    //set progress 
    if (position > 100){
        srollProgress.style.display = "grid";
    }
    else{
        srollProgress.style.display = "none";
    }

    //scroll to top
    srollProgress.addEventListener("click", () => {
        document.documentElement.scrollTop = 0;
    });
    srollProgress.style.background = `conic-gradient(#fff06a ${scrollValue}%, #202020 ${scrollValue}%)` 
};

window.onscroll = scroll;
window.onload = scroll;
