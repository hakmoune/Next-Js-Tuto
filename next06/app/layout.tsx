import "./globals.css";
import Navbar from "./components/Navbar";
import MyProfilePic from "./components/MyProfilePin";

export const metadata = {
  title: "Mahdi's Blog",
  description: "Created by El Mahdi HAKMOUNE",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="dark:bg-slate-800">
        <Navbar />
        <MyProfilePic />
        {children}
      </body>
    </html>
  );
}
