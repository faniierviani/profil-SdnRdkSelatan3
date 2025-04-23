fetch('guru.json')
  .then(response => response.json())
  .then(data => {
    const guruList = document.getElementById('guru-list');
    guruList.innerHTML = data.map(guru => `
      <div class="col-md-4 mb-4">
        <div class="card shadow-sm">
          <img src="${guru.foto}" class="card-img-top" alt="${guru.nama}">
          <div class="card-body">
            <h5 class="card-title">${guru.nama}</h5>
            <p class="card-text">Mata Pelajaran: ${guru.mapel}</p>
          </div>
        </div>
      </div>
    `).join('');
  });