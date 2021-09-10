const icons = document.querySelector(".container>.icons");

const createIcon = () => {
    gameData.map((ele) => {
        const art = document.createElement('article');
        art.innerHTML = `
            <img src="${ele.img_path}" alt="${ele.title}Img">
            <h3>${ele.title}</h3>
            <p>${ele.category}</p>
        `;
        art.classList.add('icon');
        art.classList.add('flex');
        art.id = `${ele.title}`;
        icons.append(art);
    })
}

window.onload = () => {
    createIcon();

    const icon = document.querySelectorAll(".container .icons .icon");

    icon.forEach((ele)=>{
        ele.addEventListener("click", function({target}) {
            const targetId = this.id;
            const data = gameData.filter( ele=> ele.title === targetId );

            const popup = document.createElement("section");
            popup.classList.add('popup');
            popup.classList.add('flex');

            popup.innerHTML = `
                <article class="flex">
                    <button class="close_btn" style="background: ${data[0].color};">x</button>
                    <h2 class="title">${data[0].title}</h2>
                    <img src="${data[0].img_path}" alt="iconImg" class="icon">
                    <p class="text">${data[0].content}</p>
                    <img src="${data[0].qr_path}" alt="iconQR" class="qr">
                    <img src="./img/playstore.png" alt="playstore" class="play">
                </article>
            `;
            document.body.append(popup);
            // console.log(data[0]);
        })
    })
    
    console.log(icon);
};


{/* <section class="popup flex">
    <article class="flex">
        <button class="close_btn">x</button>
        <h2 class="title">지뿌다뿌</h2>
        <img src="./img/icon/지뿌다뿌.png" alt="iconImg" class="icon">
        <p class="text">알맞은 커맨드를 눌러 내려오는 건물을 모두 파괴하세요!!</p>
        <img src="./img/qr/지뿌다뿌_QR.png" alt="iconQR" class="qr">
        <img src="./img/playstore.png" alt="playstore" class="play">
    </article>
</section> */}