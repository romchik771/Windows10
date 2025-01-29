    let root = document.documentElement;
    var ahCheckbox = document.getElementById("autoHideCheckbox");
    var taskbar = document.getElementById("taskbar");

    function autoHideToggle() {
        if (ahCheckbox.checked == true) {
            taskbar.addEventListener("mouseenter", showTaskbar);
            taskbar.addEventListener("mouseleave", hideTaskbar);
            hideTaskbar();
            document.getElementById("ahLabel").innerHTML = "On"
            document.cookie = "autoHideTB=true";
        } else {
            taskbar.addEventListener("mouseenter", showTaskbar);
            taskbar.removeEventListener("mouseleave", hideTaskbar);
            showTaskbar();
            document.getElementById("ahLabel").innerHTML = "Off"
            document.cookie = "autoHideTB=false";
        }
    }

    function hideTaskbar() {
        taskbar.style.height = "30px";
        document.getElementById("tbButtons").style.opacity = "0";
        document.getElementById("tbIndicator").style.opacity = "1";
        document.getElementById("statusArea").style.paddingRight = "0";
        document.getElementById("statusArea").style.alignItems = "center";
        document.getElementById("statusArea").style.flexDirection = "row";
    }

    function showTaskbar() {
        taskbar.style.height = "var(--tbSizeM)";
        document.getElementById("tbButtons").style.opacity = "1";
        document.getElementById("tbIndicator").style.opacity = "0";
        document.getElementById("statusArea").style.paddingRight = "10px";
        document.getElementById("statusArea").style.alignItems = "flex-end";
        document.getElementById("statusArea").style.flexDirection = "column-reverse";
    }

    function autoHideSave() {
        const tbAutoHide = document.cookie
            .split('; ')
            .find(row => row.startsWith('autoHideTB='))
            .split('=')[1];

        if (tbAutoHide === "true") {
            ahCheckbox.checked = true;
        } else {
            ahCheckbox.checked = false;
        }
    }

    function setTBSize() {
        root.style.setProperty('--tbSizeM', '40px');
    }

    // Set the default taskbar size to small
    setTBSize();