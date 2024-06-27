import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import Frog from "~/assets/frog.png?jsx";

export default component$(() => {
  return (
    <div class="flex min-h-full items-center justify-center bg-white">
      <Frog />
    </div>
  );
});

export const head: DocumentHead = {
  title: "Thomas Abstellkammer",
  meta: [
    {
      name: "description",
      content: "Very whimsical",
    },
  ],
};
