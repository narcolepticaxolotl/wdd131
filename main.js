// 20260303
const url = `https://api.github.com/repos/${"narcolepticaxolotl"}/${"wdd131"}/contents/`;
console.log(url)

// Code below written by chatgpt
const username = "narcolepticaxolotl";
const repo = "wdd131";
const branch = "main"; // or "master"
const baseApiUrl = `https://api.github.com/repos/${username}/${repo}/contents/`;
const basePagesUrl = `https://${username}.github.io/${repo}/`;

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

loadDirectory();