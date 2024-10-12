import "./globals.css";

export const metadata = {
  title: "HDStore Docs",
  description: "HDStore Docs!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}