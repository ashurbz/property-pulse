import NavBar from "@/components/NavBar";
import "@/assets/styles/globals.css";

export const metadata = {
  title: "Property Pulse app",
  description:
    "A app where we can look for the properties, rent them or we can list a new property",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <nav>
          <NavBar />
        </nav>
        <main>{children}</main>{" "}
      </body>
    </html>
  );
}
