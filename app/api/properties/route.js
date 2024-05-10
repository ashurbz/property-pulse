import connectDB from "@/config/mongoose";
import Property from "@/models/Property";

export async function GET(request) {
  try {
    await connectDB();
    const properties = await Property.find({});

    return new Response(JSON.stringify(properties), { status: 200 });
  } catch (error) {
    console.log(error);
    return new Response("Something Went Wrong", { status: 500 });
  }
}

// import connectDB from "@/config/mongoose";
// import Property from "@/models/Property";
// import properties from "@/properties.json";
// export async function POST(request) {
//   try {
//     await connectDB();
//     let data = new Property(properties);
//     data = await data.save();
//     console.log(data);

//     // const data = await Test.find({});
//     return new Response(JSON.stringify(data), { status: 200 });
//   } catch (error) {
//     console.log(error);
//     return new Response("Something Went Wrong", { status: 500 });
//   }
// }
