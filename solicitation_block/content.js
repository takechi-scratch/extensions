// 侍エンジニア
if (window.location.host.includes("sejuku.net")) {
    let popup;
    let elements;
    const removeClasses = ["p-blogParts post_content", "c-widget widget_setting_banner_widget", "footer-banner creative-banner active", "sc_button2"];
    const removeIds = ["break_banner", "fv-banner_random"];

    console.log("監視を開始します");
    setInterval(() => {
        removeIds.forEach((removeId) => {
            popup = document.getElementById(removeId);
            if (popup) {
                popup.remove();
                console.log("ポップアップを削除しました");
            }
        });

        removeClasses.forEach((removeClass) => {
            elements = document.getElementsByClassName(removeClass);
            [...elements].forEach(element => {
                element.remove();
                console.log("勧誘の要素を削除しました");
            });
        });

    }, 1000);
}

// テックアカデミー
if (window.location.host.includes("magazine.techacademy.jp")) {
    let popup;
    let elements;
    const removeClasses = ["ad", "service-description", "recruit-box", "post-footer-ad"];

    console.log("監視を開始します");
    setInterval(() => {
        popup = document.getElementById("popmake-76238");
        if (popup) {
            popup.remove();
            console.log("ポップアップを削除しました");
        }

        removeClasses.forEach((removeClass) => {
            elements = document.getElementsByClassName(removeClass);
            [...elements].forEach(element => {
                element.remove();
                console.log("勧誘の要素を削除しました");
            });
        });

    }, 1000);
}
