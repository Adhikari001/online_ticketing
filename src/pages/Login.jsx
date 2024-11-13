import LoginForm from "../features/login/LoginForm";
import Heading2 from "../ui/Heading2";

export default function LoginPage() {
  return (
    <main className="h-screen flex flex-col content-center justify-center gap-14 px-3 max-w-md m-auto">
      <Heading2>Login to your account</Heading2>
      <LoginForm />
    </main>
  );
}
