import { useRouter } from "next/router";
// import { styled } from "goober";
import { Button } from "../components/button";

export default function Home() {
  const router = useRouter();

  return (
    <main>
      <Button onClick={() => router.back()}>Go Back</Button>

      <h1
        css={{
          maxWidth: "75vw",
          fontSize: "1.5em",
        }}
      >
        Another route
      </h1>

      <p>
        Styles should be code-splitted, loaded only when the route is loaded.
      </p>

      <p>
        The button is loaded on the main route also, so it should not be fetched
        twice.
      </p>
    </main>
  );
}

// can use either tagged templates
// const Heading = styled("h1")`
//   max-width: 75vw;
//   font-size: 1.5rem;
// `;

// or object styles
// const Heading = styled("h1")({
//   maxWidth: "75vw",
//   fontSize: "1.5em",
// });
