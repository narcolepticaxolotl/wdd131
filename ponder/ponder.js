// 20260303

// Code below written by chatgpt. Originally made for main.js in the parent folder.
const username = "narcolepticaxolotl";
const repo = "wdd131";
// const branch = "main"; // I commented this out bc it's apparently never used.
const baseApiUrl = `https://api.github.com/repos/${username}/${repo}/contents/`;
console.log(baseApiUrl)
console.log(window.location.pathame)
const basePagesUrl = `https://${username}.github.io/${repo}/`;
console.log(basePagesUrl)
// Instead of the above ^ line, I wanted to try this. v (But it didn't work first-try and I'm gonna just worry about it later.)
// const basePagesUrl = window.location.pathname

async function loadDirectory(path = "") {
    const response = await fetch(baseApiUrl + path);
    const data = await response.json();

    const list = document.getElementById("file-list");

    data.forEach(item => {
        // Only link HTML files and folders
        if (item.type === "file" && item.name.endsWith(".html")) {
            const li = document.createElement("li");
            const a = document.createElement("a");

            a.textContent = item.name;
            a.href = basePagesUrl + item.path;

            li.appendChild(a);
            list.appendChild(li);
        }

        if (item.type === "dir") {
            const li = document.createElement("li");
            const a = document.createElement("a");

            a.textContent = item.name + "/";
            a.href = basePagesUrl + item.path;

            li.appendChild(a);
            list.appendChild(li);
        }
    });
}

loadDirectory("ponder");