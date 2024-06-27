import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import Back from "~/assets/back.png?jsx";
import Front from "~/assets/front.png?jsx";

export default component$(() => {
  return (
    <div class="flex  items-center justify-center bg-white">
      <div class="group max-h-[500px]">
        <Front class="max-h-full w-auto group-hover:hidden" />
        <Back class="hidden h-full max-h-full w-auto group-hover:block" />
      </div>
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
