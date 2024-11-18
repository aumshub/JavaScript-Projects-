console.log("Hello JS");

function createCard(title, cName, views, monthsOld, duration, thumbnail ) {
    let viewstr;
    if (views <= 1000){
        viewstr = views;
        }else if (views >= 1000000){
            viewstr = (views/1000000) + "M";
        }else{
            viewstr = (views/1000) + "K" ;
        }
    let html = `<div id="card">
            <div id="thumbNail">
                <div class="image-wrapper">
                    <img src="${thumbnail}" width="200" alt="image">
                    <div class="timeStamp">
                        <p>${duration}</p>
                    </div>
                </div>
            </div>
            <div id="inner-container">
                <div id="txtcont-1">
                    <h4>${title}</h4>
                </div>
                <div id="txtcont-2" class="inner-txt">
                    <div id="channel-name" class="smallfonts">
                        <p>${cName}</p>
                    </div>
                    <div class="dot" class="inner-txt">.</div>
                    <div id="idviews" class="smallfonts">
                        <p>${viewstr} views</p>
                    </div>
                    <div class="dot" class="inner-txt">.</div>
                    <div id="timeOld" class="smallfonts">
                        <p>${monthsOld} months ago</p>
                    </div>
                </div>
            </div>
        </div>`
document.querySelector("main").innerHTML += html //is designed to append html.
// document.querySelector("main").innerHTML =  document.querySelector("main").innerHTML + html  // same as above.
}

createCard("This is all about DSA", "DSA Masters", 99,   3, "07:50", "https://media.geeksforgeeks.org/wp-content/cdn-uploads/20220507102444/How-to-Start-Leaning-DSA.jpg")


