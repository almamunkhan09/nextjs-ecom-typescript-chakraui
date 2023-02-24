export const rootNotFoundMetadata = {
  title: 'Not Found',
  description: "sorry can't find the page you are looking for",
};

export default function NotFound() {
  return (
    <>
      <h2>Not Found</h2>
      <p>Could not find requested resource</p>
    </>
  );
}
