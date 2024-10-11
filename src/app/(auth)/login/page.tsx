"use client";
import { useState } from "react";
import { toast } from "react-toastify";

interface Credentials {
  username: string | null;
  password: string | null;
}

export default function LoginPage() {
  const [credentials, setCredentials] = useState<Credentials>({
    username: null,
    password: null,
  });
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("Form submitted");
    const form = event.currentTarget;
    const formData = new FormData(form);
    const username = formData.get("username") as string;
    if (!username) {
      toast.error("Username is required");
      console.log("Username is required");
      return;
    }
    const password = formData.get("password") as string;
    if (!password) {
      toast.error("Password is required");
      console.log("Password is required");
      return;
    }
    setCredentials({ username, password });
    console.log(`Username: ${username}, Password: ${password}`);
  };
  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <input
          required
          name="username"
          className="border"
          type="text"
          placeholder="Username"
        />
        <input
          required
          name="password"
          className="border"
          type="password"
          placeholder="Password"
        />
        <button type="submit">Login</button>
      </form>
      {credentials.username && <p>Username: {credentials.username}</p>}
    </div>
  );
}
