import connectDB from "@/config/mongoose";
import Properties from "@/models/Property";

export async function GET(req, { params }) {
  try {
    await connectDB();
    const property = await Properties.findById(params.id);
    if (!property) {
      return new Response("Property Not Found", { status: 404 });
    }
    return new Response(JSON.stringify(property), { status: 200 });
  } catch (error) {
    console.log(error);
    return new Response("Failed to get", { status: 404 });
  }
}
