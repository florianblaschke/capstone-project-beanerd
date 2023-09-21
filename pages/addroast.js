import Form from "@/components/Form";
import { useRouter } from "next/router";
import { useToast } from "@/components/Modals/Toast/toastProvider";

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
      toast.errorToast("We know this roast already!");
    }
    if (res.status === 418) {
      toast.errorToast("You can't submit empty spaces or just numbers!");
    }
    if (res.ok) {
      toast.successToast("Roast successfully added!");
      router.push("/");
    }
  }
  return (
    <>
      <Form onSubmit={addRoast} />
    </>
  );
}
