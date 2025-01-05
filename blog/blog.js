
let dataUser = [];
let i = 0;

const tombol = document.querySelectorAll('button')[1];
tombol.addEventListener('click', function() {
    const konten = document.querySelector('.content');
    if (i < dataUser.length) {
        konten.insertAdjacentHTML('beforeend', createCard(dataUser[i]));
        i++;
    } else {
        alert("Semua data sudah ditampilkan!");
    }
});

function getData() {
    return fetch('../inputUser.json')
        .then(response => response.json())
        .then(data => {
            dataUser = data["input-user"];
        })
        .catch(error => {
            console.log('Terjadi kesalahan:', error);
        });
}

function createCard(item) {
    return `
        <div class="card">
            <div class="card-body">
                <h5 class="card-title">${item.tittle}</h5>
                <p class="card-text">${item.description}</p>
            </div>
        </div>
    `;
}

getData();