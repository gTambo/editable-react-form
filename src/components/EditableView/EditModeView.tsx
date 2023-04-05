// this will contain a form

export const EditModeView = () => {
  return (
    <main>
      <header>Make some changes</header>
      <form action="Submit">
        <input type="text" value="" placeholder="Change Me" />
        <button type="submit">Submit</button>
      </form>
    </main>
  );
};
