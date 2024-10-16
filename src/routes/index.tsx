import { Title } from "@solidjs/meta";
import { Dynamic } from "solid-js/web";
import Counter from "~/components/Counter";

export default function Home() {
  return (
    <main>
      <Dynamic component={"my-custom-element"} data-awesome="true">
        1. I'm a dynamic component without `attr:*`. Inspect element me. Expect:
        No attributes.
      </Dynamic>

      <br />
      <br />

      <Dynamic component={"my-custom-element"} attr:data-awesome="true">
        2. I'm a dynamic component with `attr:*`. Inspect element me. Expect:
        Has attribute.
      </Dynamic>

      <br />
      <br />
      <br />
      <br />

      <div style={{ "text-align": "start" }}>
        Try enabling SSR in <code>app.config.ts</code>.
        <br />
        <br />
        <span>Number (1.) Will have attributes.</span>
        <br />
        <br />
        <span>
          Number (2.) Will have an attribute but it's actually prefixed with
          `attr:`.
        </span>
      </div>
    </main>
  );
}
