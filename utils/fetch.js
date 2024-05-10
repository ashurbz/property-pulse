async function fetchPropertiesData() {
  try {
    const res = await fetch(`http://localhost:3000/api/properties`);

    return res.json();
  } catch (error) {
    console.log(error);
  }
}

export { fetchPropertiesData };
