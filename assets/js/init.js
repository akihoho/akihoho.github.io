
$(function () {
    if ($(".js-modal-video").length) {
        $(".js-modal-video").modalVideo({
        channel: "youtube",
        youtube: {
            rel: 0, //関連動画の指定
            autoplay: 1,
            controls: 1, // コントロール表示（0は非表示）
        },
        });
    }
    });