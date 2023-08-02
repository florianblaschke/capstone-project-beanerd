import Form from "@/components/Form";
import { useRouter } from "next/router";

export default function AddRoast() {
  const router = useRouter();

  async function addRoast(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);

    data.arabica = Number(data.arabica);
    data.robusta = 100 - data.arabica;

    const res = await fetch("api/roasts", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    if (res.status === 400) {
      alert("This coffee already exists");
    }
    if (res.status === 418) {
      alert("You can't submit empty fields and/or just numbers.");
    }
    if (res.ok) {
      router.push("/");
    }
  }
  return <Form onSubmit={addRoast} />;
}
