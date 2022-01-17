let index = 0;

const scriptURL = "https://script.google.com/macros/s/AKfycby52SWH0r195EeTn3RwSdoWEVAlp8RfqWPg3LmIePnlVVBoKsdHjaTlSg5-c6Jm-N6s/exec";

// jquery的 ajax，使用GET方法
$.ajax({
    url: scriptURL,
    type: "GET",
    // 若成功，執行以下...
    success: function(response) {
        let Length = response.length - 1;
        console.log(Length);
        console.log(response);

        function showPickSound(audioSrc) {
            $("#hint").remove(); /**因為元素是增加的，所以每次生成之前，將原來的刪除掉*/
            var audioJQ = $("<audio src='" + audioSrc + "' autoplay id='hint'/>");
            audioJQ.appendTo("body"); /**創建 audio 標籤的 Jquery 對象，然後追加到 body 進行播放*/
        }

        function showStartSound(audioS) {
            $("#hint").remove(); /**因為元素是增加的，所以每次生成之前，將原來的刪除掉*/
            var audioST = $("<audio src='" + audioS + "' autoplay id='hint'/>");
            audioST.appendTo("body"); /**創建 audio 標籤的 Jquery 對象，然後追加到 body 進行播放*/
        }
        $('#role').append(
            "<p id='name' class='stroke'>" + response[Length][0] + "</p>" +
            "<img id='pic' src='" + response[Length][2] + "' alt='一張圖片'>" +
            "<p id='intr' class='stroke'>" + response[Length][1] + "</p>"
        );
        $('#next').click(function() {
            showPickSound("UI/音效/PickRole.mp3");
            $('#role').empty();
            index++;
            if (index == (Length + 1)) {
                index = 1;
            }
            $('#role').append(
                "<p id='name' class='stroke'>" + response[index][0] + "</p>" +
                "<img id='pic' src='" + response[index][2] + "' alt='一張圖片'>" +
                "<p id='intr' class='stroke'>" + response[index][1] + "</p>"
            );
        });

        $('#prev').click(function() {
            showPickSound("UI/音效/PickRole.mp3");
            $('#role').empty();
            index--;
            if (index == -1 || index == 0) {
                index = Length;
            }
            $('#role').append(
                "<p id='name' class='stroke'>" + response[index][0] + "</p>" +
                "<img id='pic' src='" + response[index][2] + "' alt='一張圖片'>" +
                "<p id='intr' class='stroke'>" + response[index][1] + "</p>"
            );
        });

        $('#Github').mouseenter(function() {
            showStartSound("UI/音效/Starting.mp3");
        });

        $('#Add').mouseenter(function() {
            showStartSound("UI/音效/Starting.mp3");
        });

        $('#startGame').mouseenter(function() {
            showStartSound("UI/音效/Starting.mp3");
        });

        $('#startGame').click(function() {
            let role = ""
            if (index == 0) {
                console.log(response[Length][0]);
                role = response[Length][2];
            } else {
                console.log(response[index][0]);
                role = response[index][2];
            }
            $.ajax({
                url: "https://script.google.com/macros/s/AKfycbyQpYxSLvFIbKL3-pIMEDTGT0XudrOafpVUmEJvM3domotFKVjy0dyDDvFcI8bJLotCRw/exec",
                data: {
                    "Role": role
                },
                success: function(response) {
                    if (response == "成功") {}
                },
            });

        });
    },

    // 若失敗，執行以下...
    error: function() {
        console.log('read 失敗');
    }
});