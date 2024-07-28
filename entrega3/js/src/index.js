async function obtenerData() {
    await fetch("http://localhost:3000/data.json")
      .then((response) => response.json())
      .then((json) => (Data = json));
      console.log(Data);
  }

obtenerUsers();
