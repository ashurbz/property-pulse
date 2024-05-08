export const metadata = {
  title: "Property Pulse app",
  description:
    "A app where we can look for the properties, rent them or we can list a new property",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <main>{children}</main>{" "}
      </body>
    </html>
  );
}
