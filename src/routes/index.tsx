import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import Back from "~/assets/back.png?jsx";
import Front from "~/assets/front.png?jsx";

export default component$(() => {
  return (
    <div class="flex flex-col items-center justify-center bg-white">
      <h1 class="py-2 text-4xl font-bold lg:text-6xl">
        Welcome to Thomas Abstellkammer, very Whimsical
      </h1>
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
