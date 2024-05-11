async function fetchPropertiesData() {
  try {
    const res = await fetch(`http://localhost:3000/api/properties`);

    return res.json();
  } catch (error) {
    console.log(error);
  }
}

async function fetchSingleProperty(id) {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_DOMAIN}/properties/${id}`
    );
    return res.json();
  } catch (error) {
    console.log(error);
  }
}

export { fetchPropertiesData, fetchSingleProperty };
