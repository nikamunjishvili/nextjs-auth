import "@/styles/globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavbarComponent from "@/components/header";
import { AuthContextProfider } from "@/context/auth-context";
import { useRouter } from "next/router";
import ProtectedRoute from "@/components/protected";

const noAuthRequred = ["", "/login", "/signup"];
export default function App({ Component, pageProps }: any) {
  const router = useRouter();
  return (
    <AuthContextProfider>
      <NavbarComponent />
      {noAuthRequred.includes(router.pathname) ? (
        <Component {...pageProps} />
      ) : (
        <ProtectedRoute>
          <Component {...pageProps} />
        </ProtectedRoute>
      )}
    </AuthContextProfider>
  );
}
