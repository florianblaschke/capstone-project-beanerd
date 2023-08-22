import Form from "@/components/Form";
import { useRouter } from "next/router";
import { useToast } from "@/components/Modals/Toast/toastContext";

export default function AddRoast() {
  const router = useRouter();
  const toast = useToast();

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
      toast.errorToast("Diesen Kaffee kennen wir bereits!");
    }
    if (res.status === 418) {
      toast.errorToast("Sry – leere Felder und/oder nur Zahlen gehen nicht!");
    }
    if (res.ok) {
      toast.successToast("Kaffee erfolgreich erstellt!");
      router.push("/");
    }
  }
  return (
    <>
      <Form onSubmit={addRoast} />
    </>
  );
}
