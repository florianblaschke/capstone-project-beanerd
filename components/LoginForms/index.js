export default function Login() {
  return (
    <form onSubmit={() => console.log("This will make you a BEANERD!")}>
      <label htmlFor="name">Name:</label>
      <input id="name" name="name" required />
      <label htmlFor="password">Passwort:</label>
      <input id="password" name="password" type="password" />
      <button>Anmelden</button>
    </form>
  );
}
