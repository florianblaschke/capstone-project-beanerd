export default function CreateAccount() {
  return (
    <form onSubmit={() => console.log("This will make you a part of BEANERD!")}>
      <label htmlFor="name">Name:</label>
      <input id="name" name="name" required />
      <label htmlFor="password">Passwort:</label>
      <input id="password" name="password" type="password" />
      <label htmlFor="confirm">Passwort bestätigen:</label>
      <input id="confirm" name="confirm" type="password" />
      <button>Profil erstellen</button>
    </form>
  );
}
