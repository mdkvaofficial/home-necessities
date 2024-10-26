import { B as pop, z as push, C as slot } from "../../chunks/index.js";
function Nav($$payload, $$props) {
  push();
  $$payload.out += `<nav class="svelte-7dv8i4"><a href="./" class="svelte-7dv8i4">Home</a> <a href="./medicines" class="svelte-7dv8i4">Medicines</a> <a href="./bp" class="svelte-7dv8i4">Blood Pressure</a> <a href="./diabetes" class="svelte-7dv8i4">Diabetes</a> <button class="svelte-7dv8i4">Language</button> `;
  {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]--></nav>`;
  pop();
}
function _layout($$payload, $$props) {
  Nav($$payload);
  $$payload.out += `<!----> <!---->`;
  slot($$payload, $$props, "default", {});
  $$payload.out += `<!---->`;
}
export {
  _layout as default
};
