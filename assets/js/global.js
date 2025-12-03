
// Returns all element descendants of node that match selectors ([data-import]).
// this returns an array like element that can be looped through
const componentElements = document.querySelectorAll("[data-import]");

// loop through this array list elements
for (let element of componentElements) {
  // get the specific attributes that we stored the path to the component/module in
  const dataImport = element.getAttribute("data-import");
  
  fetch(dataImport)
    .then((res) => {
        if(!res.ok){
            throw "Not found"
        }
      return res.text();
    })
    .then((component) => {
      element.innerHTML = component;
      loadComponentScripts(element)
    })
    .catch(() => {
      element.innerHTML = `<h4>Component not found</h4>`;
    });
}

function loadComponentScripts(element){
    const scripts = element.querySelectorAll("script");
    for (let script of scripts) {
        const newScript = document.createElement('script');
        if(script.src){
            newScript.src = script.src;
        }
        if(script.textContent){
            newScript.textContent = script.textContent;
        }
        script.remove()
        
        document.body.appendChild(newScript)
    }
}

function displayComponent (element) {
    for (let element of element ) {
        const dataImport = element.getattribute ("data-import")
        fetch (dataImport)
        .then((response) => {
            if (!response.ok)
                throw "response is not found" ; 
                return response.text (

                )
        }) 
        .then ((component) => {
            element.innerHTML = component ;
            loadComponenetStylesheets (element, dataImport);
            loadComponentScripts (element)

        })
    .catch (()=> {
        element.innerHTML = " cant find component"
    }) 
}}


// function to load the app
function loadPage(page) {
    fetch(page)
        .then(res => res.text())
        .then(data => {
            document.getElementById("app").innerHTML = data;
        })
        .catch(err => console.log("Error loading page: ", err));
}

//The sidebar
fetch("/module/sidebar/sidebar.html")
    .then(res => res.text())
    .then(data => {
        document.getElementById("sidebar").innerHTML = data;

        addSidebarEvents();
    });

// Sidebar Events to buttons
function addSidebarEvents() {
    document.getElementById("btn-dashboard").onclick = () =>
        loadPage("/module/dashboard/dashboard.html");

    document.getElementById("btn-tasks").onclick = () =>
        loadPage("/module/tasks/tasks.html");

    document.getElementById("btn-community").onclick = () =>
        loadPage("/module/community/community.html");

    // dashboard as a default page
    loadPage("/module/dashboard/dashboard.html");
}


//loading the scripts of the html i added because they were not working
function loadPage(page, script = null) {
    fetch(page)
        .then(res => res.text())
        .then(data => {
            document.getElementById("app").innerHTML = data;

            if (script) {
                const s = document.createElement("script");
                s.src = script;
                document.body.appendChild(s);
            }
        })
        .catch(err => console.log("Error loading page: ", err));
}

document.getElementById("btn-dashboard").onclick = () =>
    loadPage("/module/dashboard/dashboard.html", "/module/dashboard/dashboard.js");

document.getElementById("btn-tasks").onclick = () =>
    loadPage("/module/tasks/tasks.html", "/module/tasks/tasks.js");

document.getElementById("btn-community").onclick = () =>
    loadPage("/module/community/community.html", "/module/community/community.js");

// default
loadPage("/module/dashboard/dashboard.html", "/module/dashboard/dashboard.js");


